import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  row-gap: 20px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    row-gap: 30px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    row-gap: 40px;
    column-gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 12px;

  transition:
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow.shadowCard};
    scale: 1.01;
  }
`;
