import { Container, Logo, Navigation } from 'components'
import { HeaderWrapper, StyledHeader } from "./Header.styled"

export const Header = () => {
   return (
      <HeaderWrapper>
         <Container>
            <StyledHeader>
               <Logo />
               <Navigation />
            </StyledHeader>
         </Container>
      </HeaderWrapper>
   );
};