import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;

  :hover{
    color: ${({ theme }) => theme.colors.accent};
   
  }

  :hover svg {
    fill: ${({ theme }) => theme.colors.accent};
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 24px;
    height: 24px;
  }
`;
