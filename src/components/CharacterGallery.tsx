import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {Character} from "../types/RickAndMortyCharacter.ts";

type CharacterGalleryProps = {
    characters: Character[];
    searchText: string;
    setSearchText: (text: string) => void;
    page: number;
    setPage: (page: number) => void;
    isLoading: boolean;
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {

    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(props.searchText.toLowerCase()));

    const cards = filteredCharacters.map((character) => <CharacterCard key={character.name + Math.random()} character={character}/>);

    return (
        <>
            {props.isLoading ? (<p>Content is loading ....</p>) : (
                <>
                    <div className={"pagination-button"}>
                        {props.page !== 1 && (<button onClick={() => props.setPage(props.page -1)}>Prev</button>)}
                        {props.page <= props.characters.length && (<button onClick={() => props.setPage(props.page +1)}>Next</button>)}
                    </div>
                    <div className="character-gallery">
                        <input type="text" onChange={(e) => props.setSearchText(e.target.value)} placeholder="Search for a character"/>
                        {filteredCharacters.length === 0 ? <p>No characters found</p> : cards}
                    </div>
                </>
            )}
        </>
    );
}