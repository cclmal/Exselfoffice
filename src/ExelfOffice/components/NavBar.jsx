import {  Toolbar,  Box, Button  } from "@mui/material"
import {useMediaQuery} from "@mui/material"
import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";
import { useState } from "react";
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import newLogo2 from '../assets/newLogo2.png'
import responsiveLogo from '../assets/responsiveLogo.png'



const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
});


const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


const ElevationTypography = styled(Typography)(({ theme }) => ({
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'translateY(-3px)',
      textShadow: '0 4px 20px rgba(0,0,0,0.32)',
    },
}));




export const NavBar = () => {

const isMediumScreen = useMediaQuery('(max-width: 620px)');
const isTinyScreen = useMediaQuery('(min-width: 520px)');
const [open, setOpen] = useState(false);



const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, {resetForm}) => {
        try {
            await emailjs
                    .send(
                    'service_iua286k',
                    'template_3g0wkbq',
                    {
                        name: values.name,
                        email: values.email,
                        message: values.message,
                    },
                    'HPTvN-n2p8KT9urKG'
                    )
            resetForm()
        } catch (error) {
            console.log(error)
        } 
    },
  });


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};



  return (


            <Toolbar 
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '80px',
                    backgroundColor: 'primary.main',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.13)',
                    zIndex: 2,
                    position: 'fixed'
                }}>
                

                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 2
                    }}
                >

                {
                        isMediumScreen 
                        ? (<Box 
                            component='img'     
                            src={ responsiveLogo } 
                            alt="Main logo"
                            sx={{
                                width: '150px', // Cambia a un ancho fijo
                                marginLeft: -3, 
                                marginTop: -2
                            }}
                            />)
                        : (<Box 
                            component='img'  
                            src={ newLogo2 } 
                            alt="Main logo"
                            style={{
                                width: '200px', // Cambia a un ancho fijo
                            }}
                            />)
                }

                </Box>

                    {
                        isTinyScreen &&  
                        <Box
                            sx={{
                                marginLeft: '20px',
                                width: "2px",
                                height: "70%",
                                backgroundColor: "rgba(0, 0, 0, 0.1)" ,
                                '@media (max-width: 600px)': {
                                    marginLeft: 1, // Ajusta el margen izquierdo en pantallas menores a 620px
                                  }       
                            }}
                        ></Box>
                    }


                <Box 
                    sx={{
                        display: 'flex',
                        marginLeft: 4,
                        marginRight: 'auto',
                        '@media (max-width: 620px)': {
                            marginLeft: 'auto', // Ajusta el margen izquierdo en pantallas menores a 620px
                            marginRight: 'auto'
                          },
                        '@media (max-width: 420px)': {
                            marginLeft: -4, // Ajusta el margen izquierdo en pantallas menores a 620px
                            marginRight: 'auto'
                          },
                    }}   
                >

                    <Box sx={{ marginRight: 4}}>
                         <ElevationTypography
                                onClick={(event) => {
                                event.preventDefault();
                                scrollToSection("Services");
                                }}
                                component="a"
                                href="#Services"
                                sx={{
                                color: '#707070',
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                                }}
                            >
                                Services
                        </ElevationTypography>
                    </Box>

                    <Box sx={{ marginRight: 4}} >
                        <ElevationTypography
                                onClick={(event) => {
                                event.preventDefault();
                                scrollToSection("footer");
                                }}
                                component="a"
                                href="#footer"
                                sx={{
                                color: '#707070',
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                                }}
                            >
                                Talk to Me
                        </ElevationTypography>
                    </Box>

                    <Box sx={{ marginRight: 'auto'}} >
                         <ElevationTypography
                                onClick={(event) => {
                                event.preventDefault();
                                scrollToSection("AboutMe");
                                }}
                                component="a"
                                href="#AboutMe"
                                sx={{
                                color: '#707070',
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                                '&:focus': {
                                    outline: 'none',
                                    borderBottom: 'none',
                                },
                                }}
                            >
                                About Me
                         </ElevationTypography>
                    </Box>

                </Box>
                
                    <Button 
                        onClick={handleClickOpen}
                        sx={{
                            border: '1px solid #A3869A',
                            width: '20%',
                            height: '50px',
                            backgroundColor: 'secondary.main',
                            color: 'black',
                            marginLeft: 'auto',
                            '&:hover': {
                                backgroundColor: '#D8AEC0'
                            },
                            '@media (max-width: 741px)': {
                                display: 'none'
                            }
                            
                        }}
                    >
                        Contact
                    </Button>


                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                    >

                            <form onSubmit={formik.handleSubmit}>   
                                <DialogTitle id="form-dialog-title">Submit a form and we will contact you as soon as possible.</DialogTitle>
                                    <DialogContent>
                                    
                                    

                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                variant="outlined"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}
                                            />

                                            {/* Correo electrónico */}
                                            <TextField
                                                margin="dense"
                                                id="email"
                                                label="Email"
                                                type="email"
                                                fullWidth
                                                variant="outlined"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />

                                            {/* Mensaje */}
                                            <TextareaAutosize
                                                aria-label="Mensaje"
                                                placeholder="Message"
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                error={formik.touched.message && Boolean(formik.errors.message)}
                                                helperText={formik.touched.message && formik.errors.message}
                                                minRows={5}
                                                name="message"
                                                style={{
                                                width: '100%',
                                                marginTop: '16px',
                                                padding: '8px',
                                                borderColor: 'rgba(0, 0, 0, 0.23)',
                                                borderWidth: '1px',
                                                borderRadius: '4px',
                                                }}
                                            />
                                    

                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} sx={{ color: 'black'}}>
                                        Cancel
                                        </Button>
                                        <Button type="submit" sx={{ color: 'black'}}>
                                        Submit
                                        </Button>
                                    </DialogActions>

                            </form>
                    </Dialog>


            </Toolbar>


      
  )

}
