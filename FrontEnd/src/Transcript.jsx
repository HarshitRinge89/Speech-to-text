import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./Content.css";

const FORMATS = [
  { cmd: "bold", label: <b>B</b>, title: "Bold (Ctrl+B)" },
  { cmd: "italic", label: <i>I</i>, title: "Italic (Ctrl+I)" },
  { cmd: "underline", label: <u>U</u>, title: "Underline (Ctrl+U)" },
];

const LISTS = [
  { cmd: "insertUnorderedList", label: "•≡", title: "Bullet list" },
  { cmd: "insertOrderedList", label: "1≡", title: "Numbered list" },
];

const countWords = (text) => {
  // normalise non-breaking spaces and zero-width chars the browser inserts
  const t = text.replace(/[\u00A0\u200B]/g, " ").trim();
  return t ? t.split(/\s+/).length : 0;
};

const Transcript = forwardRef(function Transcript({ onChange, onExport }, ref) {
  const editorRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [active, setActive] = useState({});
  const [autoFormat, setAutoFormat] = useState(true); // UI only for now

  const sync = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    const text = el.innerText || el.textContent || "";
    setWordCount(countWords(text));
    setIsEmpty(text.trim() === "");
    onChange?.(el.innerHTML, text);
  }, [onChange]);

  // Highlight toolbar buttons based on where the caret is
  const refreshActive = useCallback(() => {
    const el = editorRef.current;
    const sel = window.getSelection();
    if (!el || !sel.rangeCount || !el.contains(sel.anchorNode)) return;
    const next = {};
    [...FORMATS, ...LISTS].forEach(({ cmd }) => {
      try {
        next[cmd] = document.queryCommandState(cmd);
      } catch {
        next[cmd] = false;
      }
    });
    setActive(next);
  }, []);

  useEffect(() => {
    document.addEventListener("selectionchange", refreshActive);
    return () => document.removeEventListener("selectionchange", refreshActive);
  }, [refreshActive]);

  const exec = (cmd) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, null);
    sync();
    refreshActive();
  };

  const clear = () => {
    if (editorRef.current) editorRef.current.innerHTML = "";
    sync();
  };

  const appendText = (str) => {
    const el = editorRef.current;
    if (!el) return;
    const p = document.createElement("div");
    p.textContent = str;
    el.appendChild(p);
    el.scrollTop = el.scrollHeight;
    sync();
  };

  useImperativeHandle(ref, () => ({
    appendText,
    clear,
    getHTML: () => editorRef.current?.innerHTML ?? "",
    getText: () => editorRef.current?.innerText ?? "",
  }));

  // Paste as plain text so pasted content doesn't bring foreign styles
  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  const handleExport = () => {
    const el = editorRef.current;
    if (!el || isEmpty) return;
    if (onExport) return onExport(el.innerHTML, el.innerText);
    const blob = new Blob([el.innerText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  // onMouseDown + preventDefault keeps the text selection when clicking buttons
  const ToolButton = ({ cmd, label, title }) => (
    <button
    key={cmd}
      type="button"
      className={`tr-btn ${active[cmd] ? "is-active" : ""}`}
      title={title}
      onMouseDown={(e) => {
        e.preventDefault();
        exec(cmd);
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="tr-card">
      <div className="tr-header">
        <div>
          <h3>Transcript</h3>
          <p>Edit your transcription before exporting</p>
        </div>
        <label className="tr-toggle">
          <span>Auto format</span>
          <input
            type="checkbox"
            checked={autoFormat}
            onChange={(e) => setAutoFormat(e.target.checked)}
          />
          <span className="tr-switch" />
        </label>
      </div>

      <div className="tr-editor-wrap">
        <div className="tr-toolbar">
          {FORMATS.map((f) => (
            <ToolButton key={f.cmd} {...f} />
          ))}
          <span className="tr-divider" />
          {LISTS.map((f) => (
            <ToolButton key={f.cmd} {...f} />
          ))}
          <button
            type="button"
            className="tr-btn"
            title="Export"
            onMouseDown={(e) => {
              e.preventDefault();
              handleExport();
            }}
          >
            ↗
          </button>
        </div>

        <div
          ref={editorRef}
          className={`tr-editor ${isEmpty ? "is-empty" : ""}`}
          contentEditable
          suppressContentEditableWarning
          spellCheck
          onInput={sync}
          onPaste={handlePaste}
        />
      </div>

      <div className="tr-footer">
        <span>Words: {wordCount}</span>
        <button
          type="button"
          className="tr-clear"
          onClick={clear}
          disabled={isEmpty}
        >
          ⌫ Clear Text
        </button>
      </div>
    </div>
  );
});

export default Transcript;