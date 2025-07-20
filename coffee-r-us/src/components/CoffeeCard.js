const CoffeeCard = ({ coffee }) => {
  const { name, origin, description, price, storeName } = coffee;

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Origin:</strong> {origin}</p>
      <p>{description}</p>
      <p style={styles.price}>${price.toFixed(2)}</p>
      <p style={styles.store}>Available at: <strong>{storeName}</strong></p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff8f2',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '250px',
    textAlign: 'left',
  },
  price: {
    fontWeight: 'bold',
    color: '#6b4226',
    marginTop: '0.5rem',
  },
  store: {
    marginTop: '0.75rem',
    fontStyle: 'italic',
    color: '#333',
  }
};

export default CoffeeCard