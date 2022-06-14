import styled from 'styled-components';

export const ProfileInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const ProfileText = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: baseline;
  width: 40%;
  margin: 250px 0 0 250px;
  h5 {
    font-size: var(--font24);
    line-height: var(--gap0);
  }
  h1 {
    font-size: var(--font80);
    line-height: var(--font80);
    font-weight: 900;
    margin: var(--gap20) 0;
  }
  h4 {
    font-size: var(--font40);
    line-height: var(--font50);
    color: var(--color-o);
    margin-bottom: var(--gap40);
  }
  p {
    font-size: var(--font18);
    line-height: var(--font24);
    margin-bottom: var(--gap50);
  }
`;
export const ProfileThumb = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
