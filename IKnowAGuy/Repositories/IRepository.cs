namespace IKnowAGuy.Repositories
{
    public interface IRepository<T>
    {
        void Add(T item);
        void Remove(int id);
        T Get(long id);
        IEnumerable<T> GetAll();
    }
}
