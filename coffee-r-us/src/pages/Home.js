import useStoreInfo from '../hooks/useStoreInfo';

const Home = () => {
  const { storeInfo, loading, error } = useStoreInfo();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading store info: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{storeInfo.name}</h1>
      <p style={styles.description}>{storeInfo.description}</p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B5E3C',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'black',
  },
  description: {
    fontSize: '1.25rem',
    color: 'white',
  },
};

export default Home;