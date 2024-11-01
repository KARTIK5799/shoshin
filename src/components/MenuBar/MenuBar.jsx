import styles from "./MenuBar.module.css";
import PropTypes from 'prop-types';
import CompanyLogo from "../../assets/company-logo.png";
import NavIcon from "../NavIcon/NavIcon";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import RecruitmentIcon from "../../assets/recruitmentIcon.svg";
import ScheduleIcon from "../../assets/scheduleIcon.svg";
import EmployeeIcon from "../../assets/employeeIcon.svg";
import DepartmentIcon from "../../assets/departmentIcon.svg";
import SupportIcon from "../../assets/supportIcon.svg";
import SettingsIcon from "../../assets/settingIcon.svg";
import TabCompanyLogo from '../../assets/tab-logo.png';


const MenuBar = ({toggleMenu}) => {
  return (
    <div className={styles.menuBar}>
      <div className={styles.close} onClick={toggleMenu}>
     close
      </div>
      <div className={styles.logoContainer}>
        <img src={CompanyLogo} alt="Company Logo" className={styles.logo} />
        <img src={TabCompanyLogo} alt="Company Logo" className={styles.tabLogo} />
      </div>

      <div className={styles.menuSection}>
        <h3>Main Menu</h3>
        <ul className={styles.menuList}>
          <li>
            <NavIcon icon={DashboardIcon} altText="Dashboard" />
            <h2 className={styles.menuListTitle}>Dashboard</h2>
          </li>
          <li>
            <NavIcon icon={RecruitmentIcon} altText="Recruitment" />
            <h2 className={styles.menuListTitle}> Recruitment </h2>
          </li>
          <li>
            <NavIcon icon={ScheduleIcon} altText="Schedule" />
            <h2 className={styles.menuListTitle}> Schedule</h2>{" "}
          </li>
          <li>
            <NavIcon icon={EmployeeIcon} altText="Employee" />
            <h2 className={styles.menuListTitle}> Employees</h2>{" "}
          </li>
          <li>
            <NavIcon icon={DepartmentIcon} altText="Department" />
            <h2 className={styles.menuListTitle}> Departments</h2>{" "}
          </li>
        </ul>
      </div>

      <div className={styles.menuSection}>
        <h3>Others</h3>
        <ul className={styles.menuList}>
          <li>
            <NavIcon icon={SupportIcon} altText="Support" />
            <h2 className={styles.menuListTitle}> Support</h2>{" "}
          </li>
          <li>
            <NavIcon icon={SettingsIcon} altText="Settings" />
            <h2 className={styles.menuListTitle}> Settings</h2>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired, 
};

export default MenuBar;
