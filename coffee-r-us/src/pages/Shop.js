import { useState } from 'react';
import useStoreCatalog from '../hooks/useStoreCatalog';
import CoffeeCard from '../components/CoffeeCard';
import FilterSidebar from '../components/FilterSidebar';

const Shop = () => {
  const { stores, loading, error } = useStoreCatalog();
  const [selectedStoreIds, setSelectedStoreIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading coffee...</p>;
  if (error) return <p>Error: {error}</p>;

  // ☕ Get all coffees based on selected store filters (or all if none selected)
  const visibleStores = selectedStoreIds.length > 0
    ? stores.filter(store => selectedStoreIds.includes(store.id))
    : stores;

  const allFilteredCoffee = visibleStores.flatMap(store =>
    store.coffee.map(coffee => ({
      ...coffee,
      storeName: store.name,
    }))
  ).filter(coffee =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coffee.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔁 Toggle store selection
  const toggleStore = id => {
    setSelectedStoreIds(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shop Our Coffee</h1>

      <FilterSidebar
        stores={stores}
        selectedStores={selectedStoreIds}
        onToggleStore={toggleStore}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div style={styles.grid}>
        {allFilteredCoffee.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#6B4226',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    justifyItems: 'center',
  },
};

export default Shop;