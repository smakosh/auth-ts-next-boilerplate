import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'ui/theme/global-style';
import theme from 'ui/theme';

const AppProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default AppProviders;
