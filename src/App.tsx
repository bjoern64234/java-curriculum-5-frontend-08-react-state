import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import CharacterForm from "./components/CharacterForm.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";

export default function App() {
    const [searchText, setSearchText] = useState("");
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((res) => setCharacters(res.data.results))
            .catch(console.error);
    },[])

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/characters"} element={<CharacterGallery characters={characters}  searchText={searchText} setSearchText={setSearchText} />} />
                <Route path={"/character"} element={<CharacterForm />} />
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={characters} />} />
            </Routes>
        </>
    );
}
