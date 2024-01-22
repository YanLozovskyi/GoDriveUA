import sprite from 'src/assets/images/sprite/sprite.svg';
import { StyledLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLink to="/">
      <svg>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
      CoDriveUA
    </StyledLink>
  );
};
