import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrincipalPage from './container/principalpage';
import DetailPage from './container/detailpage';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path={'/'} element ={<PrincipalPage/>}/>
        <Route path={'/:id'} element ={<DetailPage/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
