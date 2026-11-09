import os
from flask import Flask, jsonify, request,send_from_directory,send_file
from werkzeug.utils import secure_filename,safe_join
import whisper
from docx import Document

app=Flask(__name__)

BASE_DIR=os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.abspath(
    os.path.join(BASE_DIR,"../frontend/dist")
)
UPLOAD_FOLDER=os.path.join(BASE_DIR,"uploads")
os.makedirs(UPLOAD_FOLDER,exist_ok=True)

app.config["MAX_CONTENT_LENGTH"]=50*1024*1024

#install model 
print("Loading Whisper model...")
model=whisper.load_model("base")
print("Whisper Model installed succesfully")

#audio intake lega
@app.route("/api/transcribe",methods=["POST"])
def transcribe():
    if "audio" not in request.files:
        return jsonify({"error":"No audio file found in databse"}),400

    audio=request.files["audio"]

    if not audio.filename:
        return jsonify({"error":"Empty File"}),400

    import tempfile

    audio_path=None
    doc_path=None
    try:
        with tempfile.namedTemporaryFile(
            suffix=os.path.splitext(audio.filename)[1],
            delete=False
        ) as temp_audio:
            audio_path =temp_audio.name
            audio.save(audio_path)

        result =model.transcribe(audio_path)
        document =Document()

        document.addheading("Speech to text Notes", 0)
        document.add_paragraph(result["text"])

        with tempfile.NamedTemporaryFile(
            suffix=".docx",
            delete=False
        ) as temp_doc:
            doc_path=temp_doc.name

        return send_file(
            doc_path,
            as_attachment=True,
            download_name="transcription.docx",
            mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
    except Exception as e:
        return jsonify({"error":str(e)}),500

    finally:
        if os.path.exists(audio_path):
            os.remove(audio_path)

#Server side code hai yeh
@app.route("/",defaults={"path":""})
@app.route("/<path:path>")
def home(path):
    file_path=os.path.join(FRONTEND_DIR,path)

    if file_path and os.path.isfile(file_path):
        return send_from_directory(FRONTEND_DIR,path)

    return send_from_directory(FRONTEND_DIR,"index.html")

if __name__=="__main__":
    app.run(debug=True,port=5000)