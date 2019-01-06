import axios from "axios";

export const send = async (to,  cc, bcc, subject, body) =>{
    try {
        const emailRequest = await axios.post('http://localhost:3001/email/send', {
            to: to,
            cc,
            bcc,
            subject,
            text: body
        });

        return emailRequest.data.message
    }
    catch(err){
        let errorMessage = "Oops something went wrong";
        if(err && err.response && err.response.data && err.response.data.message){
            errorMessage = err.response.data.message
        }

        throw Error(errorMessage)
    }
};