import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Homepage />} />
        <Route path='/' element={<Navigate to='home' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
