import { useState } from "react";
import styles from "./NavBar.module.css";
import NavIcon from "../NavIcon/NavIcon";
import MenuIcon from "../../assets/menu.svg";
import SearchIcon from "../../assets/Union.svg";
import NotificationIcon from "../../assets/notifications.svg";
import MessageIcon from "../../assets/message.svg";
import ProfileImage from "../../assets/Profile.png";
import DownArrowIcon from "../../assets/down.svg";
import MenuBar from "../MenuBar/MenuBar";

const NavBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSearchBar = () => setIsSearchOpen((prev) => !prev);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <section className={styles.navSection}>
      <div className={styles.menuBarSec}>
        <MenuBar />
      </div>
      <nav className={`${styles.navBar} container`}>
        <div className={styles.rightNavSec}>
          <div onClick={toggleMenu} className={styles.menuSection}>
            <NavIcon icon={MenuIcon} alt="Menu" />
         
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <MenuBar toggleMenu={toggleMenu}/>
            </div>
          )}
           </div>
          <div className={isSearchOpen ? styles.mobileNavSearch : styles.mobileSearchHidden}>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInputMobile}
              />
            )}
            <div onClick={toggleSearchBar} className={styles.mobileSearchIcon}>
              <NavIcon icon={SearchIcon} alt="Search" />
            </div>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
            <NavIcon icon={SearchIcon} alt="Search" />
          </div>
        </div>

        {/* Left Section */}
        <div className={styles.leftNavSec}>
          <NavIcon icon={NotificationIcon} alt="Notifications" />
          <NavIcon icon={MessageIcon} alt="Messages" />

          <div className={styles.profileSec} onClick={toggleDrawer}>
            <img
              src={ProfileImage}
              alt="Profile"
              className={styles.profileImage}
            />
            <p>Kartik Sapkal</p>
            <NavIcon icon={DownArrowIcon} alt="Profile Options" />
          </div>
          {isDrawerOpen && (
            <div className={styles.profileDrawer}>
              <ul>
                {["Account", "Profile Settings", "Notifications", "Help & Support", "Privacy Settings", "Log out"].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
