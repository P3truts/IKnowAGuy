using Microsoft.Extensions.Primitives;

namespace IKnowAGuy.Models
{
    public class QueryParams
    {
        public string? UserRole { get; set; }
        public int? PageSize { get; set; }
        public int? PageNumber { get; set; }
        public string SearchTerm { get; set; }
    }
}
