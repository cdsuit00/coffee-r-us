const StoreSelector = ({ stores, selectedStoreId, onSelect }) => (
  <select value={selectedStoreId || ''} onChange={e => onSelect(Number(e.target.value))}>
    <option value="">Select a store</option>
    {stores.map(store => (
      <option key={store.id} value={store.id}>{store.name}</option>
    ))}
  </select>
);

export default StoreSelector;