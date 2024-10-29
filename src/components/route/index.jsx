import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Detail from '../../pages/Detail';

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} replace={true} />} />
      <Route path='/home' element={<Home />} />
      <Route path='/details/:name' element={<Detail />} />
    </Routes>
  );
};

export default AppRoute;
