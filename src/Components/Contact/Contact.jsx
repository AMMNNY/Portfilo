import "./Contact.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useState ,useEffect } from "react";
import EmailIcon from '@mui/icons-material/Email';
export default function () {
    const [state, handleSubmit] = useForm("xlgwekwp");
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (state.succeeded) {
            setOpen(true)
        }
    },[state.succeeded])
    return (
        <div id="email" style={{ display: "flex", flexDirection: "column", alignItems: "center",gap:"10px" }}>
            <div>
            <Snackbar
            open={open}
            autoHideDuration={3000}
            message="Note archived"
            onClose={()=>setOpen(false)}
        />
        </div>
        <div className="con" style={{gap:"75px"}}>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "space-between" }}
                    className="textField">
            <div className="word">
            <h1><EmailIcon /> Get in Touch</h1>
            <p>
            Interested in working together or have a question?
            You can contact me using the form below.
                </p>
            </div>
            <TextField
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            sx={{
                background: "rgb(24 24 27)",
                borderRadius: "5px",
                border: "1px solid rgba(63, 63, 70, 0.7)",

                // لون اللابل
                "& .MuiInputLabel-root": {
                color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
                },

                // 🔥 لون الكلام لما تكتب
                "& .MuiOutlinedInput-input": {
                color: "white",
                },
            }}
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <TextField
            label="Message"
            id="message"
            name="message"
            multiline
            maxRows={4}
            variant="standard"
            sx={{
                background: "rgb(24 24 27)",
                borderRadius: "5px",
                padding: "6px",

                // لون اللابل
                "& .MuiInputLabel-root": {
                color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
                },

                // لون النص المكتوب
                "& .MuiInputBase-input": {
                color: "white",
                },

                // 🔥 الخط تحت (Standard)
                "& .MuiInput-underline:before": {
                borderBottom: "1px solid rgba(63, 63, 70, 0.7)",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "1px solid rgba(113, 113, 122, 0.9)",
                },
                "& .MuiInput-underline:after": {
                borderBottom: "2px solid white",
                },
            }}
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />

                <Button className="submit" style={{border:"solid",marginBottom:"10px"}} type="submit" disabled={state.submitting}>Submit</Button>
            </form>
            <div className="video">
                <DotLottieReact
                    src="https://lottie.host/b2fcb3c0-41c4-4d9d-832b-be5be4a111ca/SWgpCOwvv7.lottie"
                    loop
                    autoplay
                />
            </div>
            </div>
        </div>
    )
}