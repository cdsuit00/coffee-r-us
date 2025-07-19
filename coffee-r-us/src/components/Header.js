import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) => ({
    margin: '0 1rem',
    textDecoration: 'none',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    color: location.pathname === path ? '#fff' : '#f1f1f1',
    backgroundColor: location.pathname === path ? '#6B4226' : 'transparent',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  });

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>☕ Coffee R Us</h2>
      <div>
        <Link to="/" style={linkStyle('/')}>Home</Link>
        <Link to="/shop" style={linkStyle('/shop')}>Shop</Link>
        <Link to="/admin" style={linkStyle('/admin')}>Admin</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#442918',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

export default Header;