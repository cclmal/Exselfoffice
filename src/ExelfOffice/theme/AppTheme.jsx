import PropTypes from 'prop-types';
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { pinkTheme } from "./PinkTheme"

export const AppTheme = ({ children }) => {

  return (

        <ThemeProvider theme={ pinkTheme }>

                <CssBaseline/>

                { children }

        </ThemeProvider>
  )
}

AppTheme.propTypes = {
    children: PropTypes.node.isRequired,
};
