import React, { useState } from "react";
import { FaBars, FaBus, FaBox, FaMapMarkedAlt, FaWallet, FaBell, FaCog, FaSignOutAlt, FaQuestionCircle, FaHome, FaSearch, FaUserCircle } from "react-icons/fa";

export default function DTTMSDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div style={styles.container}>
      {/* === SIDEBAR === */}
      <div style={{ ...styles.sidebar, width: isCollapsed ? "70px" : "240px" }}>
        <div style={styles.sidebarHeader}>
          {!isCollapsed &&  <img className="logo" src="/src/assets/CHAK-LOGO.png" alt="" />}
          <FaBars style={styles.toggleBtn} onClick={toggleSidebar} />
        </div>

        <ul style={styles.menu}>
          <li style={styles.menuItem}><FaHome /> {!isCollapsed && <span>Dashboard</span>}</li>
          <li style={styles.menuItem}><FaBus /> {!isCollapsed && <span>Book Trip</span>}</li>
          <li style={styles.menuItem}><FaBox /> {!isCollapsed && <span>Send Goods</span>}</li>
          <li style={styles.menuItem}><FaMapMarkedAlt /> {!isCollapsed && <span>Tourism</span>}</li>
          <li style={styles.menuItem}><FaWallet /> {!isCollapsed && <span>Wallet</span>}</li>
          <li style={styles.menuItem}><FaBell /> {!isCollapsed && <span>Notifications</span>}</li>
          <li style={styles.menuItem}><FaQuestionCircle /> {!isCollapsed && <span>Help & Support</span>}</li>
          <li style={styles.menuItem}><FaCog /> {!isCollapsed && <span>Settings</span>}</li>
        </ul>

        <div style={styles.logout}>
          <FaSignOutAlt /> {!isCollapsed && <span>Logout</span>}
        </div>
      </div>

      {/* === MAIN AREA === */}
      <div style={{ ...styles.mainContent, marginLeft: isCollapsed ? "70px" : "240px" }}>
        {/* === NAVBAR === */}
        <div style={styles.navbar}>
          <div style={styles.searchBar}>
            <FaSearch style={{ marginRight: 8, color: "#64748b" }} />
            <input
              type="text"
              placeholder="Search trips, goods or destinations..."
              style={styles.searchInput}
            />
          </div>
          <div style={styles.navRight}>
            <FaBell style={styles.navIcon} />
            <FaUserCircle style={styles.navIcon} />
          </div>
        </div>

        {/* === DASHBOARD CONTENT === */}
        <div style={styles.dashboard}>
          <h1>Welcome to DTTMS</h1>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
}

/* === INLINE CSS STYLES === */
const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    height: "100vh",
    margin: 0,
  },
  sidebar: {
    backgroundColor: "#1e293b",
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    top: 0,
    transition: "width 0.3s ease",
    overflow: "hidden",
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    background: "#0f172a",
    borderBottom: "1px solid #334155",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
  },
  toggleBtn: {
    cursor: "pointer",
    fontSize: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
    flex: 1,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  logout: {
    padding: "15px",
    borderTop: "1px solid #334155",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
  },
  mainContent: {
    flex: 1,
    transition: "margin-left 0.3s",
    width: "100%",
    background: "#f1f5f9",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "10px 20px",
    borderBottom: "1px solid #e2e8f0",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    background: "#f1f5f9",
    padding: "8px 12px",
    borderRadius: "8px",
    width: "50%",
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontSize: "14px",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  navIcon: {
    fontSize: "22px",
    color: "#475569",
    cursor: "pointer",
  },
  dashboard: {
    padding: "30px",
  },
};
