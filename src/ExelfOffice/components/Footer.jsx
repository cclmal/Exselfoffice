import { Box, Button } from "@mui/material"
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
import useMediaQuery from '@mui/material/useMediaQuery';
import contact from '../assets/contact.png'
import contact2 from '../assets/contact2.png'

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

export const Footer = () => {


const [open, setOpen] = useState(false);
const isTinyScreen = useMediaQuery('(max-width: 741px)');


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



  const isBigScreen = useMediaQuery('(max-width: 750px)');

  return (
    <Box 
        id="footer"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            border: '1px solid black',
            backgroundColor: 'secondary.main',
            marginTop: 4
        }}>


          {
              isBigScreen
              ? <Box 
                  component="img"
                  src={contact2}
                  sx={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      marginTop: 4
                  }}
                />
              : <Box 
                  component="img"
                  src={contact}
                  sx={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      marginTop: 4
                  }}
                />

          }
          

          {
                isTinyScreen && <Button 
                              onClick={handleClickOpen}
                              sx={{
                                  border: '1px solid #A3869A',
                                  width: '90%',
                                  height: '50px',
                                  backgroundColor: '#4F3C74',
                                  color: 'white',
                                  marginBottom: 3,
                                  '&:hover': {
                                      backgroundColor: '#432A72'
                                  },
                              }}
                          >
                              Contact
                          </Button>
          }


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

    </Box>
  )
}
