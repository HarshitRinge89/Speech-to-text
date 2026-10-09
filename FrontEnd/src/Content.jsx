import "./content.css";

const notes = [
  { title: "AI Discussion Notes", date: "Today, 12:30 PM", tag: "AI" },
  { title: "DBMS Lecture Notes", date: "Yesterday, 3:15 PM", tag: "Study" },
  { title: "Project Meeting", date: "28 Aug 2026", tag: "Work" },
  { title: "Machine Learning Notes", date: "25 Aug 2026", tag: "Study" },
];

const activity = [
  { title: "Generated document", detail: "AI Discussion Notes.docx", time: "Today, 12:30 PM", color: "purple" },
  { title: "Uploaded audio file", detail: "lecture_audio.mp3", time: "Yesterday, 3:12 PM", color: "blue" },
  { title: "Created new note", detail: "Project Meeting", time: "28 Aug 2026", color: "green" },
];

export default function Content() {
  return (
    <main className="content" id="home">
      <section className="welcome-banner">
        <div className="welcome-banner__copy">
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
          <h1>Welcome back, Akriti! <span aria-hidden="true">👋</span></h1>
          <p>Record your voice or upload an audio file, convert it to text, and organize everything in one place.</p>
        </div>
        <div className="welcome-banner__art" aria-hidden="true">
          <span className="sound-wave">▂▅▇▃▆▂</span>
          <span className="welcome-banner__mic">🎙</span>
          <span className="welcome-banner__document">▤</span>
        </div>
      </section>

      <div className="dashboard-grid">
        <div className="dashboard-column dashboard-column--left">
          <section className="panel recorder-panel">
            <div className="panel-heading">
              <span className="panel-heading__icon">🎙</span>
              <div><h2>Record or Upload Audio</h2><p>Start with a new recording or import a file</p></div>
            </div>
            <div className="action-tabs">
              <button className="action-tab action-tab--active" type="button">🎙 <span>Record Audio</span></button>
              <button className="action-tab" type="button">⇧ <span>Upload File</span></button>
            </div>
            <div className="recording-area">
              <div className="recording-area__mic">🎙</div>
              <p className="recording-area__prompt">Ready when you are</p>
              <p className="recording-area__timer">00:00</p>
              <p className="recording-area__status"><span /> Not recording</p>
            </div>
            <div className="button-row">
              <button className="button button--primary" type="button">● &nbsp; Start Recording</button>
              <button className="button button--secondary" type="button">⌫ &nbsp; Clear</button>
            </div>
          </section>

          <section className="panel format-panel">
            <div className="panel-heading panel-heading--compact">
              <span className="panel-heading__icon">▤</span>
              <div><h2>Available Audio Formats</h2><p>MP3, WAV, M4A, AAC, OGG, WEBM</p><p>Maximum file size: 50 MB</p></div>
            </div>
          </section>

          <section className="panel document-options">
            <div className="panel-heading panel-heading--compact">
              <span className="panel-heading__icon">▧</span><h2>Document Options</h2>
            </div>
            <label className="field-label" htmlFor="document-title">Document title</label>
            <input className="field-input" id="document-title" type="text" defaultValue="My Notes" />
            <label className="field-label" htmlFor="file-format">File format</label>
            <select className="field-input" id="file-format" defaultValue="docx">
              <option value="docx">.docx (Word Document)</option>
              <option value="txt">.txt (Plain Text)</option>
              <option value="pdf">.pdf (PDF Document)</option>
            </select>
            <button className="button button--primary button--full" type="button">▤ &nbsp; Generate Document</button>
          </section>
        </div>

        <div className="dashboard-column dashboard-column--middle">
          <section className="panel transcript-panel">
            <div className="panel-heading transcript-heading">
              <span className="panel-heading__icon">▤</span>
              <div><h2>Transcript</h2><p>Edit your transcription before exporting</p></div>
              <label className="toggle-label">Auto format <input type="checkbox" defaultChecked /><span className="toggle-ui" /></label>
            </div>
            <div className="editor-toolbar" aria-label="Text formatting toolbar">
              <button type="button" aria-label="Bold"><strong>B</strong></button>
              <button type="button" aria-label="Italic"><em>I</em></button>
              <button type="button" aria-label="Underline"><u>U</u></button>
              <span />
              <button type="button" aria-label="Bulleted list">☷</button>
              <button type="button" aria-label="Numbered list">☷</button>
              <button type="button" aria-label="Insert link">↗</button>
            </div>
            <textarea className="transcript-editor" aria-label="Transcript text" placeholder="Your transcribed text will appear here...&#10;&#10;You can edit it, add formatting, and make changes before generating your document." />
            <div className="editor-footer"><span>Words: 0 &nbsp; | &nbsp; Estimated time: 00:00</span><button className="button button--secondary button--small" type="button">⌫ Clear Text</button></div>
          </section>
          <section className="panel tip-panel">
            <span className="tip-panel__icon">✧</span>
            <div><h3>Need a different format?</h3><p>You can choose from multiple file formats before generating your document.</p></div>
          </section>
        </div>

        <div className="dashboard-column dashboard-column--right">
          <section className="panel notes-panel" id="notes">
            <div className="section-heading"><div><span className="panel-heading__icon">▤</span><h2>My Notes</h2></div><a href="#all-notes">View all</a></div>
            <div className="note-list">
              {notes.map((note) => (
                <article className="note-item" key={note.title}>
                  <span className="note-item__icon">▤</span>
                  <div className="note-item__body"><h3>{note.title}</h3><p>{note.date}</p></div>
                  <button className="note-item__menu" type="button" aria-label={`More options for ${note.title}`}>•••</button>
                </article>
              ))}
            </div>
          </section>

          <section className="panel activity-panel">
            <div className="section-heading"><div><span className="panel-heading__icon">◷</span><h2>Recent Activity</h2></div></div>
            <div className="activity-list">
              {activity.map((item) => (
                <article className="activity-item" key={item.title}>
                  <span className={`activity-item__dot activity-item__dot--${item.color}`} />
                  <div><h3>{item.title}</h3><p>{item.detail}</p><time>{item.time}</time></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
