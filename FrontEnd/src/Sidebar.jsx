/* Presentational component only: add route state and the mobile toggle behavior yourself. */
const mainLinks = [
  { icon: <svg className="icons" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 640 640"><path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/></svg>, label: "Home", active: true },
  { icon: <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 373.5C544 390.5 537.3 406.8 525.3 418.8L418.7 525.3C406.7 537.3 390.4 544 373.4 544L160 544zM485.5 368L392 368C378.7 368 368 378.7 368 392L368 485.5L485.5 368z"/></svg>, label: "My Notes" },
];

const quickActions = [
  { icon: <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C267 64 224 107 224 160L224 288C224 341 267 384 320 384C373 384 416 341 416 288L416 160C416 107 373 64 320 64zM176 248C176 234.7 165.3 224 152 224C138.7 224 128 234.7 128 248L128 288C128 385.9 201.3 466.7 296 478.5L296 528L248 528C234.7 528 224 538.7 224 552C224 565.3 234.7 576 248 576L392 576C405.3 576 416 565.3 416 552C416 538.7 405.3 528 392 528L344 528L344 478.5C438.7 466.7 512 385.9 512 288L512 248C512 234.7 501.3 224 488 224C474.7 224 464 234.7 464 248L464 288C464 367.5 399.5 432 320 432C240.5 432 176 367.5 176 288L176 248z"/></svg>, label: "New Recording" },
  { icon: <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>, label: "Upload Audio" },
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
          <span className="sidebar__link-icon" aria-hidden="true"><svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg></span>
          <span>Help &amp; Support</span>
        </a>
      </div>
    </aside>
  );
}
