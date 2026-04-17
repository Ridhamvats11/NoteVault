import { FaMoon, FaSun, FaTrash } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode, search, setSearch, deleteAll }) {
  return (
    <div
      style={{
        padding: "15px 20px",
        backdropFilter: "blur(10px)",
        background: darkMode
          ? "rgba(20,20,20,0.6)"
          : "rgba(255,255,255,0.7)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <h2>📝 NoteVault</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button onClick={deleteAll}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Navbar;