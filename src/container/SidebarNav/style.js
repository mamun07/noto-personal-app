import styled from 'styled-components';

export const SideNavbar = styled.div`
  padding: var(--gap0);
  ul {
    padding: var(--gap0);
    margin: var(--gap0);
    li {
      text-align: center;
      list-style: none;
      a {
        width: 100%;
        font-size: var(--font30);
        color: var(--color-o);
        display: block;
        padding: var(--gap30) var(--gap0);
        transition: 0.3s;
        &:hover {
          background-color: var(--color-o1);
        }
      }
      a.active {
        background-color: var(--color-o1);
        position: relative;
        &::before {
          content: '';
          position: absolute;
          background-color: var(--color-o);
          right: 0;
          top: 0;
          width: 3px;
          height: 100%;
        }
      }
    }
  }
`;
