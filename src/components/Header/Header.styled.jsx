import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecond};
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;
