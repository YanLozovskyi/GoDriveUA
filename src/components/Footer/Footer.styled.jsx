import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  min-width: 320px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundSecond};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    text-align: left;
  }
`;

export const FooterWrapper = styled.div`
  min-width: 320px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media screen and (min-width: 428px) {
    width: 428px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 72px;
    column-gap: 24px;
    max-width: 552px;
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1158px;
    gap: 0;
    max-width: 1158px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-right: 120px;
  }

  a {
    margin-bottom: 16px;
    justify-content: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      justify-content: left;
    }
  }

  p {
    max-width: 268px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textGrey_50};
  }
`;

export const SocialWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-right: 80px;
  }

  p {
    font-weight: 500;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  li {
    width: 30px;
  }

  a {
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.textGrey_50};
    border-radius: 50%;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  a:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }

  svg {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;

export const ContactsWrapper = styled.div`
  p {
    font-weight: 500;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    padding-left: 5px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textGrey_50};
  }

  a:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;
