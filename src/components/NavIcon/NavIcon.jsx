import PropTypes from 'prop-types';
import styles from './NavIcon.module.css';

const NavIcon = ({ icon, altText, isMenu, isActive }) => {
  return (
    <button className={`${styles.iconButton} ${isActive ? styles.activeIcon : ''}`}>
      <img 
        src={icon} 
        alt={altText} 
        className={isMenu ? styles.menuIcon : ''} 
      />
    </button>
  );
};

NavIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string,
  isMenu: PropTypes.bool,
  isActive: PropTypes.bool,
};

NavIcon.defaultProps = {
  altText: '',
  isMenu: false,
  isActive: false,
};

export default NavIcon;
