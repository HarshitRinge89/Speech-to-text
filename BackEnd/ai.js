import {HfInference} from '@huggingface/inference'
//{Prompt to be inserted}
const SYSTEM_PROMPT=``
const hf= new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);
export async function getCleanDocument(textDoc,transcriptText,format){
    try{
        const response =await hf.chatCompletion({
            model:"Qwen/Qwen3-32B",
            messages:[
                { role: "system",content:SYSTEM_PROMPT},
                { role: "user",content:`I have ${textDoc}. Please give me a clean document while making sure almost all point
                of are included in the document${transcriptText},Generate the document in ${format} format`},
            ],
            max_tokens:1024,
        })
        return response.choices[0].message.content
    }catch(err){
        console.error(err.message)
    }
}