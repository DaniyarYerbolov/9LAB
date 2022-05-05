import './css/App.css';
import Header from "./components/Header";
import ContactHead from "./components/ContactHead";
import Content from "./components/Content";
import Items from "./components/Items";
import Info from "./components/Info";

function App() {
  return (
    <div >
        <ContactHead />
        <Header />
        <Content />
        <Items />
        <Info />
    </div>
  );
}

export default App;
