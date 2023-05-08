// import checkVideoVisibility  from "../../helper/checkVideoVisibility";
import { Box } from "@mui/material"
import {useMediaQuery} from "@mui/material"
import { useTheme } from '@mui/material/styles';

import mainaboutme from '../assets/mainaboutme.png'
import verticalaboutme from '../assets/verticalaboutme.png'
import hagit from '../assets/hagit.jpeg'


export const AboutMe = () => {
    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (

    
    <Box 
        id="AboutMe"
        className="aboutMe"
        sx={{
            display: 'flex',
            width: '100%',
            BorderBottom: '1px solid black',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
            

        }}>


            <Box 
                component='img'
                src={hagit}
                sx={{ 
                    marginTop: 12,
                    width: '150px',
                    borderRadius: '9999px',
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);'
                    
                }}
            />


            {

                isBigScreen 
                ?  <Box
                        component="img"
                        src={verticalaboutme}
                        alt="Video 1"
                        sx={{
                            width: '100%',
                            objectFit: "cover",
                            marginTop: '20px'
                        }}
            
                   />
                :  <Box
                        component="img"
                        src={mainaboutme}
                        alt="Video 1"
                        sx={{
                            width: '100%',
                            objectFit: "cover",
                            marginTop: '20px'
                        }}

            
                    />
              
            }
        
  
        </Box>

  )
}
