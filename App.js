//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import Home from './src/routes/Home';
import Information from './src/routes/Information';
import Layout from './src/routes/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/information/:platoid" element={<Information />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )}
