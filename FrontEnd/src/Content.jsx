import "./content.css";

const notes = [
  { title: "DBMS Lecture Notes", date: "Yesterday, 3:15 PM", tag: "Study" },
];

const activity = [
  { title: "Generated document", detail: "AI Discussion Notes.docx", time: "Today, 12:30 PM", color: "purple" },
  { title: "Uploaded audio file", detail: "lecture_audio.mp3", time: "Yesterday, 3:12 PM", color: "blue" },
];

export default function Content() {
  return (
    <main className="content" id="home">
      <section className="welcome-banner">
        <div className="welcome-banner__copy">
          <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>
          <h1>Welcome back, User! <span aria-hidden="true">👋</span></h1>
          <p>Record your voice or upload an audio file, convert it to text, and organize everything in one place.</p>
        </div>
        <div className="welcome-banner__art" aria-hidden="true">
          <span className="sound-wave">▂▅▇▃▆▂</span>
          <span className="welcome-banner__mic"><svg className="icons"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 160C224 107 267 64 320 64C370.3 64 411.6 102.7 415.7 152L360 152C346.7 152 336 162.7 336 176C336 189.3 346.7 200 360 200L416 200L416 248L360 248C346.7 248 336 258.7 336 272C336 285.3 346.7 296 360 296L415.7 296C411.6 345.3 370.4 384 320 384C267 384 224 341 224 288L224 160zM152 224C165.3 224 176 234.7 176 248L176 288C176 367.5 240.5 432 320 432C399.5 432 464 367.5 464 288L464 248C464 234.7 474.7 224 488 224C501.3 224 512 234.7 512 248L512 288C512 385.9 438.7 466.7 344 478.5L344 528L392 528C405.3 528 416 538.7 416 552C416 565.3 405.3 576 392 576L248 576C234.7 576 224 565.3 224 552C224 538.7 234.7 528 248 528L296 528L296 478.5C201.3 466.7 128 385.9 128 288L128 248C128 234.7 138.7 224 152 224z"/></svg></span>
          <span className="welcome-banner__document"><svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M32 176C32 134.5 63.6 100.4 104 96.4L104 96L384 96C437 96 480 139 480 192L480 368L304 368C264.2 368 232 400.2 232 440L232 500C232 524.3 212.3 544 188 544C163.7 544 144 524.3 144 500L144 272L80 272C53.5 272 32 250.5 32 224L32 176zM268.8 544C275.9 530.9 280 515.9 280 500L280 440C280 426.7 290.7 416 304 416L552 416C565.3 416 576 426.7 576 440L576 464C576 508.2 540.2 544 496 544L268.8 544zM112 144C94.3 144 80 158.3 80 176L80 224L144 224L144 176C144 158.3 129.7 144 112 144z"/></svg></span>
        </div>
      </section>

      <div className="dashboard-grid">
        <div className="dashboard-column dashboard-column--left">
          <section className="panel recorder-panel">
            <div className="panel-heading">
              <span className="panel-heading__icon"><svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C267 64 224 107 224 160L224 288C224 341 267 384 320 384C373 384 416 341 416 288L416 160C416 107 373 64 320 64zM176 248C176 234.7 165.3 224 152 224C138.7 224 128 234.7 128 248L128 288C128 385.9 201.3 466.7 296 478.5L296 528L248 528C234.7 528 224 538.7 224 552C224 565.3 234.7 576 248 576L392 576C405.3 576 416 565.3 416 552C416 538.7 405.3 528 392 528L344 528L344 478.5C438.7 466.7 512 385.9 512 288L512 248C512 234.7 501.3 224 488 224C474.7 224 464 234.7 464 248L464 288C464 367.5 399.5 432 320 432C240.5 432 176 367.5 176 288L176 248z"/></svg></span>
              <div><h2>Record or Upload Audio</h2><p>Start with a new recording or import a file</p></div>
            </div>
            <div className="action-tabs">
              <button className="action-tab action-tab--active" type="button">🎙 <span>Record Audio</span></button>
              <button className="action-tab" type="button">⇧ <span>Upload File</span></button>
            </div>
            <div className="recording-area">
              <div className="recording-area__mic"><svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C267 64 224 107 224 160L224 288C224 341 267 384 320 384C373 384 416 341 416 288L416 160C416 107 373 64 320 64zM176 248C176 234.7 165.3 224 152 224C138.7 224 128 234.7 128 248L128 288C128 385.9 201.3 466.7 296 478.5L296 528L248 528C234.7 528 224 538.7 224 552C224 565.3 234.7 576 248 576L392 576C405.3 576 416 565.3 416 552C416 538.7 405.3 528 392 528L344 528L344 478.5C438.7 466.7 512 385.9 512 288L512 248C512 234.7 501.3 224 488 224C474.7 224 464 234.7 464 248L464 288C464 367.5 399.5 432 320 432C240.5 432 176 367.5 176 288L176 248z"/></svg></div>
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
            <div className="editor-footer"><span>Words: 0</span><button className="button button--secondary button--small" type="button">⌫ Clear Text</button></div>
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
          {/* <section className="panel tip-panel">
            <span className="tip-panel__icon">✧</span>
            <div><h3>Need a different format?</h3><p>You can choose from multiple file formats before generating your document.</p></div>
          </section> */}
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
