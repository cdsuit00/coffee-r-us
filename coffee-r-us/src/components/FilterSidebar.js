const FilterSidebar = ({ stores, selectedStores, onToggleStore, searchTerm, onSearchChange }) => {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.heading}>Filter by Location</h3>
      {stores.map(store => (
        <label key={store.id} style={styles.label}>
          <input
            type="checkbox"
            checked={selectedStores.includes(store.id)}
            onChange={() => onToggleStore(store.id)}
          />
          {store.name}
        </label>
      ))}

      <input
        type="text"
        placeholder="Search coffee..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  sidebar: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#f8f5f2',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'left',
  },
  heading: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
};

export default FilterSidebar;