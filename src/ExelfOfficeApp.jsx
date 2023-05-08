import { Box } from "@mui/material"
import { NavBar, Header, AboutMe, Services, Footer } from "./ExelfOffice/components"
// import Link from "@mui/material"

function ExelfOfficeApp() {

  return (


    <>
   
  

      <Box
          direction="column"
          sx={{ 
            backgroundColor: 'primary.main',
            minHeight: '100vh', // Asegúrate de que el contenedor crezca al menos para llenar la altura de la ventana
            width: { sm: '100%' },
            }}>

           <NavBar/>

           <Header/>

           <AboutMe/> 

           <Services/>

           <Footer/>
           
         </Box>
    
    
    </>


  )
}

export default ExelfOfficeApp
