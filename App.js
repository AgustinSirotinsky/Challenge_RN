//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import Home from './src/routes/Home';
import Information from './src/routes/Information';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/information/:id" component={Information} />
      </Routes>
    </BrowserRouter>
  )}
