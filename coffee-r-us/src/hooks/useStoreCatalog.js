import { useEffect, useState } from 'react';

function useStoreCatalog() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/store_info')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch store info');
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
  }, []);

  return { stores, loading, error };
}

export default useStoreCatalog;