import styled from 'styled-components';

export const Buttons = styled.a`
  background: var(--color-o);
  color: var(--color-s);
  padding: var(--gap15) var(--gap50);
  font-size: var(--font18);
  border-radius: 3px;
  &:hover {
    background: var(--color-s);
    border: 1px solid var(--color-o);
    color: var(--color-o);
  }
`;
