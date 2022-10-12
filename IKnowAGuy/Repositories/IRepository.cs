namespace IKnowAGuy.Repositories
{
    public interface IRepository<T>
    {
        bool Add(T item);
        void Remove(int id);
        T Get(long id);
        bool Update(long id,T item);
        IEnumerable<T> GetAll();
    }
}
