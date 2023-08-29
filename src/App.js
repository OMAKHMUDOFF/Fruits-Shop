import { Added } from "./components/Added";
import { Best } from "./components/Best";
import { Categor } from "./components/Categor";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import { Nav } from "./components/Nav";
import { Rec } from "./components/Rec";
import { Top } from "./components/Top";
import "./style/style.css";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Head />
        <Categor />
        <Rec />
        <Best />
        <Top />
        <Added />
        <Footer /> 
      </div>
    </>
  );
}

export default App;
