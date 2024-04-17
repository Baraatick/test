import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Component/Header/Header";
import "./index.css";
import Home from "./Component/Home/Home";
import Products from "./Component/Products/Products";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
