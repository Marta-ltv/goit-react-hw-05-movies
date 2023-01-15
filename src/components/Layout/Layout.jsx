import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <main>
      <AppBar /> 
      <Outlet />
    </main>
  );
};
export default Layout;