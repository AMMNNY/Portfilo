import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./card.css"
function card(image, name , dis) {
    return(
        <div>
            <div style={{width:"100%"}} className='main'>
                <div className='project-image'>
                    <img src={image} />
                </div>
                <div className='Projet-name'>
                    <h3>{name}</h3>
                    <p>{dis}</p>
                    <button style={{ background: "rgb(24 24 27)", border: "none", padding: "0 10px" }}>
                        <GitHubIcon sx={{ color: "white" }} /></button>
                </div>
            </div>
        </div>

)};

export default function OutlinedCard({image ,name,dis}) {
    return (
        
        <Card
        variant="outlined"
            sx={{
            borderRadius:"10px",
            height: 250,
            background: "rgb(24 24 27)",
            border: "2px solid rgba(63, 63, 70, 0.7)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
            transition: "all 0.3s ease",
            "&:hover": {
            boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
            transform: "translateY(-6px)",
            },
        }}
        >
        {card(image, name, dis)}
        </Card>

        
    );
    }
