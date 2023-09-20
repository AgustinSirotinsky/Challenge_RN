//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import Home from './src/routes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )}
