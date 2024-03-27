import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Main />
        </div>
    );
};

export default App;
