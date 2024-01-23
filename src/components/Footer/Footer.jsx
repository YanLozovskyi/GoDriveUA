import {
  ContactsWrapper,
  FooterWrapper,
  LogoWrapper,
  SocialWrapper,
  StyledFooter,
} from './Footer.styled';
import { Logo } from 'components';
import sprite from 'src/assets/images/sprite/sprite.svg';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <LogoWrapper>
          <Logo />
          <p>
            Explore convenience with our car rental services and indulge in
            maximum comfort throughout your journey.
          </p>
        </LogoWrapper>
        <SocialWrapper>
          <p>Social Media:</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/">
                <svg>
                  <use href={`${sprite}#icon-facebook`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <svg>
                  <use href={`${sprite}#icon-instagram`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <svg>
                  <use href={`${sprite}#icon-twitter`}></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <svg>
                  <use href={`${sprite}#icon-linkedin`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </SocialWrapper>
        <ContactsWrapper>
          <p>Contact Information:</p>
          <address>
            <ul>
              <li>
                Address:
                <a
                  href="https://www.google.com/maps?q=1A+Sicheslavska+Naberezhna+St,+Dnipro,+Ukraine"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  1A Sicheslavska Naberezhna St, Dnipro, Ukraine
                </a>
              </li>
              <li>
                Phone: <a href="tel:+380730000000">+380730000000</a>
              </li>
              <li>
                Email:
                <a href="mailto:godriveua@gmail.com">godriveua@gmail.com</a>
              </li>
            </ul>
          </address>
        </ContactsWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};
