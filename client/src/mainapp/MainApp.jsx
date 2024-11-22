import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

// import pages
import Home from "../pages/Home.jsx";
import Items from "../pages/Items.jsx";
import Upload from "../pages/Upload.jsx";

function MainApp() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <Navbar onSearch={setSearchQuery} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Items searchQuery={searchQuery} />} />
                <Route path="/upload" element={<Upload />} />
            </Routes>
        </>
    )
}

export default MainApp;