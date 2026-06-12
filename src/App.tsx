import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";

export default function App() {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/characters"} element={<CharacterGallery searchText={searchText} setSearchText={setSearchText} />} />
            </Routes>
        </>
    );
}
