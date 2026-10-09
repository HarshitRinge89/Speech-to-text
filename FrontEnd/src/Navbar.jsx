/* Presentational component only: wire up search, notifications, profile menu and menu toggle yourself. */
export default function Navbar() {
  return (
    <header className="navbar">
      <button className="icon-button navbar__menu" type="button" aria-label="Toggle sidebar">
        ☰
      </button>

      <a className="navbar__brand" href="#home" aria-label="Speech to Text Notes home">
        <span className="navbar__brand-icon" aria-hidden="true">🎙</span>
        <span className="navbar__brand-name">Speech to Text <span>Notes</span></span>
      </a>

      <label className="navbar__search">
        <span className="navbar__search-icon" aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search your notes..." aria-label="Search your notes" />
      </label>

      <div className="navbar__actions">
        <button className="icon-button" type="button" aria-label="Notifications">♧</button>
        <button className="navbar__profile" type="button" aria-label="Open profile menu">
          <span className="avatar">A</span>
          <span className="navbar__profile-meta">
            <span className="navbar__profile-name">Akriti</span>
            <span className="navbar__profile-role">Free plan</span>
          </span>
          <span className="navbar__profile-chevron" aria-hidden="true">⌄</span>
        </button>
      </div>
    </header>
  );
}
