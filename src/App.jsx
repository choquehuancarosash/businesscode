import React, { useState, useEffect, useContext } from 'react';
import { MyRoutes } from './routers/routes'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Ligth, Dark } from './styles/Theme';
import styled, { ThemeProvider } from 'styled-components'
import Login from './components/Login';

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [autentication, setAutentication] = useState(false);
  const themeStyle = theme === "light"
    ? Ligth
    : Dark;

  return (
    <>
      <ThemeContext.Provider value=
        {{ setTheme, theme }}>
        <ThemeProvider
          theme={themeStyle}>
          <BrowserRouter>
            {
              !autentication?
                <Container className=
                  {sidebarOpen
                    ? "sidebarState active"
                    : "sidebarState"}
                >
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                  <MyRoutes />
                </Container>
                :
                <Login />
            }

          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  height:100vh;
  display:grid;
  grid-template-columns:90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition:all 0.3s;
  &.active{
    grid-template-columns:300px auto;
    
  }
  color:${({ theme }) => theme.text};
`;

export default App
