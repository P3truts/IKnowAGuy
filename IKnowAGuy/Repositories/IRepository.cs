namespace IKnowAGuy.Repositories
{
    public interface IRepository<T>
    {
        void Add(T item);
        void Remove(int id);
        T Get(int id);
        IEnumerable<T> GetAll();
    }
}
