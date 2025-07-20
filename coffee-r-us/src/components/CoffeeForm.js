const CoffeeForm = ({ formData, onChange, onSubmit, editing }) => (
  <form onSubmit={onSubmit} style={{ marginBottom: '2rem' }}>
    <input type="text" placeholder="Name" value={formData.name} onChange={e => onChange({ ...formData, name: e.target.value })} required />
    <input type="text" placeholder="Description" value={formData.description} onChange={e => onChange({ ...formData, description: e.target.value })} required />
    <input type="text" placeholder="Origin" value={formData.origin} onChange={e => onChange({ ...formData, origin: e.target.value })} required />
    <input type="number" step="0.01" placeholder="Price" value={formData.price} onChange={e => onChange({ ...formData, price: e.target.value })} required />
    <button type="submit">{editing ? 'Update' : 'Add'} Coffee</button>
  </form>
);

export default CoffeeForm;