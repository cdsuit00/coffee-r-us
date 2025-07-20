const CoffeeList = ({ coffeeItems, onEdit, onDelete }) => (
  <>
    {coffeeItems.map(coffee => (
      <div key={coffee.id} style={{ marginBottom: '1rem' }}>
        <strong>{coffee.name}</strong> - ${coffee.price}
        <button onClick={() => onEdit(coffee)} style={{ marginLeft: '1rem' }}>Edit</button>
        <button onClick={() => onDelete(coffee.id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
      </div>
    ))}
  </>
);

export default CoffeeList;