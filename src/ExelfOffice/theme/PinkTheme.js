import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const pinkTheme = createTheme({


    palette: {

        primary: {
            main: '#ffe5ec'
        } ,

        secondary: {
            main: '#F5D5E3'
        },

        error: {
            main: red.A400
        }
    }

})


console.log(pinkTheme)