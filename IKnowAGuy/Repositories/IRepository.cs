namespace IKnowAGuy.Repositories
{
    public interface IRepository<T>
    {
        bool Add(T item);
        bool Update(T item);
        void Remove(int id);
        T Get(long id);
        IEnumerable<T> GetAll();
    }
}
