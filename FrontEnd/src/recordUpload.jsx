import { useState, useRef, useEffect } from "react";

const MAX_SIZE_MB = 50;
const ACCEPTED = ".mp3,.wav,.m4a,.aac,.ogg,.webm";

export default function RecordUploadAudio({ onAudioReady }) {
  // "record" | "upload"
  const [activeTab, setActiveTab] = useState("record");

  // record state
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // upload state
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  // simple timer for the recording view
  useEffect(() => {
    if (!isRecording) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRecording]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handleFile = (f) => {
    if (!f) return;
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File is too large. Max size is ${MAX_SIZE_MB}MB.`);
      setFile(null);
      return;
    }
    setError("");
    setFile(f);
    onAudioReady?.(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const clearRecording = () => {
    setIsRecording(false);
    setSeconds(0);
  };

  const clearFile = () => {
    setFile(null);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const tabStyle = (tab) => ({
    ...styles.tab,
    ...(activeTab === tab ? styles.tabActive : styles.tabInactive),
  });

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>🎙️ Record or Upload Audio</h3>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button style={tabStyle("record")} onClick={() => setActiveTab("record")}>
          🎤 Record Audio
        </button>
        <button style={tabStyle("upload")} onClick={() => setActiveTab("upload")}>
          ⬆️ Upload File
        </button>
      </div>

      {/* Conditionally rendered content */}
      {activeTab === "record" ? (
        <div style={styles.panel}>
          <div
            style={{
              ...styles.micCircle,
              boxShadow: isRecording ? "0 0 0 10px rgba(239,68,68,0.15)" : "none",
            }}
          >
            <span style={{ fontSize: 28 }}>🎙️</span>
          </div>
          <p style={styles.hint}>
            {isRecording ? "Recording..." : "Click to start recording"}
          </p>
          <div style={styles.timer}>{formatTime(seconds)}</div>
          <div style={{ color: "#ef4444", fontSize: 11 }}>
            • {isRecording ? "Recording" : "Not recording"}
          </div>

          <div style={styles.btnRow}>
            <button
              style={styles.primaryBtn}
              onClick={() => setIsRecording((r) => !r)}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
            <button style={styles.secondaryBtn} onClick={clearRecording}>
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.panel}>
          <div
            style={{
              ...styles.dropzone,
              borderColor: dragging ? "#3b5bfd" : "#c7d0f8",
              background: dragging ? "#eef1ff" : "#f8f9ff",
            }}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <span style={{ fontSize: 30 }}>☁️</span>
            <p style={{ margin: "8px 0 2px", fontWeight: 600, fontSize: 14 }}>
              Drag & drop your audio file here
            </p>
            <p style={styles.hint}>or click to browse from your device</p>
            <input
              ref={inputRef}
              type="file"
              accept={ACCEPTED}
              hidden
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          {file && (
            <div style={styles.fileRow}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{file.name}</div>
                <div style={styles.hint}>{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
              </div>
              <button style={styles.secondaryBtn} onClick={clearFile}>
                Remove
              </button>
            </div>
          )}

          <p style={{ ...styles.hint, marginTop: 12 }}>
            Supported: MP3, WAV, M4A, AAC, OGG, WEBM · Max {MAX_SIZE_MB}MB
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "var(--surface)",
    Color:"var(--text)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: 18,
    width: "100%",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  title: { margin: "0 0 14px", fontSize: 16, color: "var(--text)" },
  tabs: { display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" },
  tab: {
    flex: 1,
    padding: "12px 8px",
    border: "none",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
    transition: "all 0.2s ease",
  },
  tabActive: { background: "var(--primary)", color: "var(--text)" },
  tabInactive: { background: "var(--surface)", color: "var(--text)" },
  panel: {
    marginTop: 14,
    padding: 16,
    border: "1px solid var(--border)",
    borderRadius: 10,
    textAlign: "center",
    background: "var(--surface)",
  },
  micCircle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "var(--primary-hover)",
    margin: "0 auto 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "box-shadow 0.3s ease",
  },
  hint: { color: "var(--text-muted)", fontSize: 12, margin: 0 },
  timer: { fontSize: 16, fontWeight: 700, margin: "6px 0 2px" },
  btnRow: { display: "flex", gap: 8, marginTop: 14 },
  primaryBtn: {
    flex: 1.3,
    padding: "10px 0",
    background: "var(--primary)",
    color: "var(--text)",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
  },
  secondaryBtn: {
    flex: 1,
    padding: "10px 12px",
    background: "var(--pr)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13,
  },
  dropzone: {
    border: "2px dashed var(--border)",
    borderRadius: 10,
    padding: "28px 12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor:"var(--surface)",
  },
  fileRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
    padding: 10,
    background: "var(--surface)",
    border: "1px solid #e6e9f5",
    borderRadius: 8,
    textAlign: "left",
  },
  error: { color: "var(--danger)", fontSize: 12, marginTop: 8 },
};