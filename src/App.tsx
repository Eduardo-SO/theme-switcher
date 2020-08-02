import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
