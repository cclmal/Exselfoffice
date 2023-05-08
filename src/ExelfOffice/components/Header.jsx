import { Box } from "@mui/material"
import videoMain from '../assets/videoMain.mp4'
import verticalVideo from '../assets/verticalVideo.mp4'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'animate.css/animate.min.css';
import './AnimatedText.css'

export const Header = () => {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <>
        <Box
          className="-mt-4"
          sx={{      
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'secondary.main'
          }}
        >

           {
                isBigScreen 
                ? <video
                    src={verticalVideo}
                    alt="Video 1"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      marginTop: '80px'
                    }}
                    autoPlay
                    muted
                
                  />
                :      
                <video
                    src={videoMain}
                    alt="Video 1"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      marginTop: '80px'
                    }}
                    autoPlay
                    muted
                    
                  />
            }   
                       
        </Box>
    </>
  );
};


