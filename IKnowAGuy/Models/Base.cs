namespace IKnowAGuy.Models
{
    public abstract class Base
    {
        public string? Id { get; private set; }
        public string? Name { get; private set; }
        public string? Description { get; private set; }
    }
}
