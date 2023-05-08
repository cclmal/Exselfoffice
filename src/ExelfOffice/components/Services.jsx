import { Box, Typography } from "@mui/material"
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import './styles.css'

export const Services = () => {
  return (

    <Box
        id="Services"
        sx={{
            display: 'flex',
            width: '100%',
            padding: 4,
            flexWrap: 'wrap',     
            // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
            justifyContent: 'center', // Agrega esta línea
       }}>


        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 5
            }}
        >
            <Typography variant="h4">SERVICES</Typography>
        </Box>

     

        <Box 
            className="card-hover"
            component="img"
            src={card1}
            sx={{
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 4,
            width: '380px',
            height: '450px',
           

        }} />

        <Box 
            className="card-hover"
            component="img"
            src={card2}
            sx={{
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 4,
            width: '380px',
            height: '450px',
            

        }} />

        <Box 
            className="card-hover"
            component="img"
            src={card3}
            sx={{
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 4,
            width: '380px',
            height: '450px',
            

        }} />

        <Box 
            className="card-hover"
            component="img"
            src={card4}
            sx={{
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 4,
            width: '380px',
            height: '450px',
            

        }} />

        <Box 
            className="card-hover"
            component="img"
            src={card5}
            sx={{
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 4,
            width: '380px',
            height: '450px',
            

        }} />
        
    </Box>

  )
}
