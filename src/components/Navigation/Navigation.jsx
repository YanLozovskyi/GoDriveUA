import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const nav = [
    { name: 'Catalog', href: '/catalog' },
    { name: 'Favorite', href: '/favorite' },
  ];

  return (
    <Nav>
      {nav.map(({ name, href }) => (
        <Link key={name + href} to={href}>
          {name}
        </Link>
      ))}
    </Nav>
  );
};
