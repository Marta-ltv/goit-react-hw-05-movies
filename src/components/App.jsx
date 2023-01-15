import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    
      <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/home" element={<div>Home</div>}></Route>
      <Route path="/movies" element={<div>Movies</div>}></Route>
      </Routes>
    
  ) 
}


