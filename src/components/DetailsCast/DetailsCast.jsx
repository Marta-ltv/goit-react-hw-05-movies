import { NavLink, useLocation } from 'react-router-dom';
import { Container } from './DetailsCast.styled';

export const DetailsCast = ({ movieId }) => {
  const navItem = [
    { href: `/movies/${movieId}/cast`, text: 'Cast' },
    { href: `/movies/${movieId}/reviews`, text: 'Reviews' },
  ];

  const location = useLocation();
  const from = location.state?.from ?? '/movies';

  return (
    <Container>
      <p>Additional information</p>
      <ul>
        {navItem.map(({ href, text }) => (
          <li key={text}>
            <NavLink to={href} state={{ from }}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};