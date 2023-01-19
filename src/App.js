import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import Homepage from './components/Homepage';
import CatsList from './components/CatsList';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}>
          </Route>
          <Route path='/cats' element={<CatsList />}>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
