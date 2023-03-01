import styled from '@emotion/styled';

export const Online = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  background: linear-gradient(
    to right,
    rgba(0, 255, 0, 0.2),
    rgba(0, 255, 0, 0.7)
  );
  border-radius: 10%;
`;

export const Offline = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.2),
    rgba(255, 0, 0, 0.7)
  );
  border-radius: 10%;
`;
