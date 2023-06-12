
import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './Home/Index'
import { Header } from '../src/components/Header/Index'

function App() {
   return(
        <ThemeProvider theme={defaultTheme}>
            <Home/>
            <GlobalStyle/>
        </ThemeProvider>
   )

}

export default App
