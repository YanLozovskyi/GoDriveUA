import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Loader } from 'components';
import { Footer } from './Footer/Footer';

const SharedLayout = () => {
  return (
    <div
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
