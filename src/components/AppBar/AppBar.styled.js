import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: solid;
`;
export const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  &.active {
    color: red;
  }

  &.active:hover,
  &.active:focus {
    text-decoration:underline;
}

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration:underline;
  }
`;