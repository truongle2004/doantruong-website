import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Post from '../content/Post/Post';

const Router = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/post' element={<Post />} />
    </Routes>
  );
};

export default Router;
