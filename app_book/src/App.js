import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/style.css";
import Layout from './components/Layout';
import AddBook from "./components/pages/AddBook";
import EditBooks from "./components/pages/EditBooks";
import Home from "./components/pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Addbook" element={<AddBook />} />
          <Route path="/Editbook" element={<EditBooks />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
