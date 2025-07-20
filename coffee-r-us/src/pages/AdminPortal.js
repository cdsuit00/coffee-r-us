import { useState } from 'react';
import useStoreCatalog from '../hooks/useStoreCatalog';
import StoreSelector from '../components/StoreSelector';
import CoffeeForm from '../components/CoffeeForm';
import CoffeeList from '../components/CoffeeList';

const AdminPortal = () => {
  const {
    stores,
    loading,
    error,
    upsertCoffee,
    deleteCoffee,
    refreshStores,
  } = useStoreCatalog();

  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    price: '',
  });
  const [editingCoffeeId, setEditingCoffeeId] = useState(null);

  const isEditing = !!editingCoffeeId;

  if (loading) return <p>Loading store data...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedStoreId) return;

    const coffeeData = {
      ...formData,
      id: isEditing ? editingCoffeeId : Date.now(),
      price: parseFloat(formData.price),
    };

    await upsertCoffee(selectedStoreId, coffeeData);
    refreshStores();

    setFormData({ name: '', description: '', origin: '', price: '' });
    setEditingCoffeeId(null);
  };

  const handleEdit = (coffee) => {
    setFormData(coffee);
    setEditingCoffeeId(coffee.id);
  };

  const handleDelete = async (coffeeId) => {
    await deleteCoffee(selectedStoreId, coffeeId);
    refreshStores();

    if (editingCoffeeId === coffeeId) {
      setFormData({ name: '', description: '', origin: '', price: '' });
      setEditingCoffeeId(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Portal</h1>

      <StoreSelector
        stores={stores}
        selectedStoreId={selectedStoreId}
        onSelect={setSelectedStoreId}
      />

      {selectedStoreId && (() => {
        const selectedStore = stores.find(store => store.id === selectedStoreId);

        return (
          <>
            <CoffeeForm
              formData={formData}
              onChange={setFormData}
              onSubmit={handleSubmit}
              editing={isEditing}
            />

            <CoffeeList
              coffeeItems={selectedStore?.coffee || []}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </>
        );
      })()}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#6B4226',
    textAlign: 'center',
  },
};

export default AdminPortal