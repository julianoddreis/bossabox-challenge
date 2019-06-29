import React from 'react'
import 'sanitize.css/sanitize.css'
import { ThemeProvider } from 'styled-components'
import { Dashboard } from './routes'
import theme from './themes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
