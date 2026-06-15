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


export interface RickAndMortyApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export default function App() {
    const [searchText, setSearchText] = useState("");
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setCharacters([]);
        axios.get<RickAndMortyApiResponse>("https://rickandmortyapi.com/api/character?page=" + page)
            .then((res) => setCharacters(res.data.results))
            .catch(console.error)
            .finally(() => setIsLoading(false));
    },[page])

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/characters"} element={<CharacterGallery isLoading={isLoading} page={page} setPage={setPage} characters={characters} searchText={searchText} setSearchText={setSearchText} />} />
                <Route path={"/character"} element={<CharacterForm characters={characters} setCharacters={setCharacters} />} />
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={characters} />} />
            </Routes>
        </>
    );
}
