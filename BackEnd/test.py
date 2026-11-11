import whisper

model = whisper.load_model("base.en")

result = model.transcribe(r"C:\Users\Akriti\Downloads\test_audio_en.mp3")

print(result["text"])