import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import {characters} from "./Characters.ts";

export default function App() {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/characters"} element={<CharacterGallery characters={characters}  searchText={searchText} setSearchText={setSearchText} />} />
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={characters} />} />
            </Routes>
        </>
    );
}
