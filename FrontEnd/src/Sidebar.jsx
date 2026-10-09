/* Presentational component only: add route state and the mobile toggle behavior yourself. */
const mainLinks = [
  { icon: "⌂", label: "Home", active: true },
  { icon: "▤", label: "My Notes" },
];

const quickActions = [
  { icon: "🎙", label: "New Recording" },
  { icon: "⇧", label: "Upload Audio" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <p className="sidebar__section-label">Workspace</p>
        <nav className="sidebar__nav" aria-label="Main navigation">
          {mainLinks.map((item) => (
            <a
              className={`sidebar__link${item.active ? " sidebar__link--active" : ""}`}
              href={item.label === "Home" ? "#home" : "#notes"}
              key={item.label}
            >
              <span className="sidebar__link-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar__divider" />

      <div>
        <p className="sidebar__section-label">Quick actions</p>
        <nav className="sidebar__nav" aria-label="Quick actions">
          {quickActions.map((item) => (
            <button className="sidebar__link" type="button" key={item.label}>
              <span className="sidebar__link-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__promo">
          <div className="sidebar__promo-icon" aria-hidden="true">✦</div>
          <p className="sidebar__promo-title">Your ideas, organized</p>
          <p className="sidebar__promo-text">Turn your voice into clean, searchable notes in moments.</p>
        </div>
        <a className="sidebar__help" href="#help">
          <span className="sidebar__link-icon" aria-hidden="true">ⓘ</span>
          <span>Help &amp; Support</span>
        </a>
      </div>
    </aside>
  );
}
