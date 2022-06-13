import styled from 'styled-components';

export const HeaderTopMain = styled.div`
  padding: var(--gap15) var(--gap40);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
export const HeaderContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font16);
`;
export const HeaderContactLeft = styled.div`
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      float: left;
      margin-right: var(--gap50);
    }
  }
`;
export const HeaderContactRight = styled.div`
  ul {
    li {
      list-style: none;
      float: left;
      margin-left: var(--gap15);
    }
  }
`;
