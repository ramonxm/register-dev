import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Routes } from './infra';
import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyle />
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
