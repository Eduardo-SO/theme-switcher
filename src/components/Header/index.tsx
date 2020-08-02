import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import Switch from 'react-switch';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h2>Hello dude!</h2>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.5, colors.background)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
