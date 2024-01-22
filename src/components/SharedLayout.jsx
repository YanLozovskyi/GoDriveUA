import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Loader } from "components";

const SharedLayout = () => {
   return (
      <div style={{
         height: '100vh',
         display: 'flex',
         flexDirection: 'column',
      }}>
         <Header />
         <main>
            <Suspense fallback={<Loader />}>
               <Container> <Outlet /></Container>
            </Suspense>
         </main>
      </div>
   )
}

export default SharedLayout;