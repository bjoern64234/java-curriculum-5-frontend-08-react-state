import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {Character} from "../types/RickAndMortyCharacter.ts";

type CharacterGalleryProps = {
    characters: Character[];
    searchText: string;
    setSearchText: (text: string) => void;
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {

    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(props.searchText.toLowerCase()));

    const cards = filteredCharacters.map((character) => <CharacterCard key={character.name} character={character}/>);

    return (
        <>
            <div className="character-gallery">
                <input type="text" onChange={(e) => props.setSearchText(e.target.value)} placeholder="Search for a character"/>
                {filteredCharacters.length === 0 ? <p>No characters found</p> : cards}
            </div>
        </>
    );
}