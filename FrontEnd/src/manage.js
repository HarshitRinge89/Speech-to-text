async function generateDoc(audioFile){
    const formData =new FormData();
    
    formData.append("audio",audioFile);

    try{
        const response =await fetch("/api/transcribe",{
            method:"POST",body:formData
        });
        
        if(!response.ok){
            throw new Error(data.error || "Transcription failed");
        }
        const blob =await response.blob();

        const url = window.URL.createObjectURL(blob);
        const link =document.createElement("a");
        
        link.href=url;
        link.download = "transcription.docx";

        document.body.appendChild(link);

        link.click();

        link.remove();

        window.URL.revokeObjectURL(url);
    }
    catch(error){
        console.log(error);
    }
}