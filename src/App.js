import './App.css'
import MsApp from './MsApp'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<MsApp />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
);
}

export default App
