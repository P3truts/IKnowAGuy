using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;

using IKnowAGuy.Repositories;
using IKnowAGuy.Repositories.Implementation;
using IKnowAGuy.Services;
using IKnowAGuy.Data;
using IKnowAGuy.Models;
using IKnowAGuy.Data.Seed;
using IKnowAGuy.Services.Implementation;
using IKnowAGuy.Configurations;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DatabaseContext");
// Add services to the container.


builder.Services.AddControllersWithViews();

builder.Services.AddCors();

builder.Services.AddDbContext<DatabaseContext>(options => options.UseSqlServer(connectionString).EnableSensitiveDataLogging());

builder.Services.AddAutoMapper(typeof(MapperInitializer));

var jwtSettings = builder.Configuration.GetSection("Jwt");
//var key = Environment.GetEnvironmentVariable("KEY");

var key = builder.Configuration["Jwt:Key"];

builder.Services.AddAuthentication(options =>
{
    // custom scheme defined in .AddPolicyScheme() below
    options.DefaultScheme = "JWT_OR_COOKIE";
    options.DefaultChallengeScheme = "JWT_OR_COOKIE";
});
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie("Cookies", options =>
{
    options.LoginPath = "/login";
    options.ExpireTimeSpan = TimeSpan.FromDays(1);
});
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opt =>
{
    opt.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.GetSection("Issuer").Value,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
    };
    opt.Audience = "IKnowAGuy";
});
builder.Services.AddAuthentication().AddPolicyScheme("JWT_OR_COOKIE", "JWT_OR_COOKIE", options =>
{
    // runs on each request
    options.ForwardDefaultSelector = context =>
    {
        // filter by auth type
        string authorization = context.Request.Headers[HeaderNames.Authorization];
        if (!string.IsNullOrEmpty(authorization) && authorization.StartsWith("Bearer "))
            return "Bearer";

        // otherwise always check for cookie auth
        return "Cookies";
    };
});

builder.Services.AddAuthorization();

builder.Services.AddIdentity<AppUser, IdentityRole>(q => q.User.RequireUniqueEmail = true)
    .AddEntityFrameworkStores<DatabaseContext>().AddDefaultTokenProviders();

builder.Services.AddSession();

builder.Services.AddScoped<IAdService, AdService>();
builder.Services.AddScoped<IAdRepository, AdRepository>();
builder.Services.AddScoped<IAddressRepository, AddressRepository>();
builder.Services.AddScoped<IJobRepository, JobRepository>();
builder.Services.AddScoped<IAddressService, AddressService>();
builder.Services.AddScoped<IAuthManager, AuthManager>();

builder.Services.AddSwaggerGen(options =>
        {
            options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Description = @"JWT Authorization Header using the Bearer scheme.
                                Enter 'Bearer' [space] and then your token in the text input below.
                                Example: 'Bearer 12345abcdef'",
                Name = "Authorization",
                In = Microsoft.OpenApi.Models.ParameterLocation.Header,
                Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
                Scheme = "Bearer"
            });

            options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement() {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        },
                        Scheme = "0auth2",
                        Name = "Bearer",
                        In = ParameterLocation.Header
                    },
                    new List<string>()
                }
            });

            options.SwaggerDoc("v1",
            new Microsoft.OpenApi.Models.OpenApiInfo
            {
                Title = "IKnowAGuy",
                Description = "IKnowAGuy API",
                Version = "v1",
            });
        });

/*builder.Services.AddControllers().AddNewtonsoftJson(opt => 
    opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);*/

var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
} 


app.UseSession();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(opt => opt
    .WithOrigins(new []{ "http/localhost:3000" }) //react port
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
);

app.UseAuthorization();
app.UseAuthentication();

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    //options.RoutePrefix = string.Empty;
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.MigrateDatabase().Run();

