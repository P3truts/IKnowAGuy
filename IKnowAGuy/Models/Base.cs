namespace IKnowAGuy.Models
{
    public abstract class Base
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }

        protected Base(int id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
        }
    }
}
