import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useState } from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <div className="app-container">
            <Navbar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
            />
            <Main searchTerm={searchTerm} />
        </div>
    );
};

export default App;
