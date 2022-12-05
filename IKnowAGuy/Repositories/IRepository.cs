namespace IKnowAGuy.Repositories
{
    public interface IRepository<T>
    {
        bool Add(T item);
        bool Update(T item);
        bool Remove(T item);
        T Get(long id);
        IEnumerable<T> GetAll();
    }
}
