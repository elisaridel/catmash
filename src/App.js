import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
