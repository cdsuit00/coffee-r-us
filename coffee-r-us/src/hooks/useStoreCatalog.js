// src/hooks/useStoreCatalog.js
import { useEffect, useState } from 'react';

const API = 'http://localhost:3001/store_info'; // adjust as needed for deployment

function useStoreCatalog() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔄 Fetch all store data
  const refreshStores = () => {
    setLoading(true);
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch store data');
        return res.json();
      })
      .then((data) => {
        setStores(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshStores();
  }, []);

  // 🔍 Get store by ID
  const getStoreById = (id) => stores.find((store) => store.id === id);

  // ✏️ Create or update coffee
  const upsertCoffee = async (storeId, coffeeData) => {
    const targetStore = getStoreById(storeId);
    if (!targetStore) return;

    const existing = targetStore.coffee.find((c) => c.id === coffeeData.id);
    const updatedCoffeeList = existing
      ? targetStore.coffee.map((c) => (c.id === coffeeData.id ? coffeeData : c))
      : [...targetStore.coffee, coffeeData];

    const updatedStore = { ...targetStore, coffee: updatedCoffeeList };

    await fetch(`${API}/${storeId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStore),
    });

    setStores((prev) =>
      prev.map((store) => (store.id === storeId ? updatedStore : store))
    );
  };

  // ❌ Remove coffee from store
  const deleteCoffee = async (storeId, coffeeId) => {
    const targetStore = getStoreById(storeId);
    if (!targetStore) return;

    const updatedStore = {
      ...targetStore,
      coffee: targetStore.coffee.filter((c) => c.id !== coffeeId),
    };

    await fetch(`${API}/${storeId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStore),
    });

    setStores((prev) =>
      prev.map((store) => (store.id === storeId ? updatedStore : store))
    );
  };

  return {
    stores,
    loading,
    error,
    refreshStores,
    getStoreById,
    upsertCoffee,
    deleteCoffee,
  };
}

export default useStoreCatalog;