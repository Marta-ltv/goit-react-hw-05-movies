import { NavItem, Header } from './AppBar.styled';


const navItem = [
  { href: '', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];


export const AppBar = () => {
  return (

    <Header>
        {navItem.map(({href, text}) => (
        <NavItem to={href} key={text}>{text}</NavItem>
        ))}
    </Header>
  );
};