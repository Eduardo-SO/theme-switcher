import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 60px;
  padding: 0 30px;

  background: ${props => props.theme.colors.primary};
  color: #fff;
`;
