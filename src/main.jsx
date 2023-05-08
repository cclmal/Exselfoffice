import React from 'react'
import ReactDOM from 'react-dom/client'
import ExelfOfficeApp from './ExelfOfficeApp.jsx'
import { AppTheme } from './ExelfOffice/theme/AppTheme.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

      <AppTheme>
         <ExelfOfficeApp />
      </AppTheme>     

  </React.StrictMode>,
)
