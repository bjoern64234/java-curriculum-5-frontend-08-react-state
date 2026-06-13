import {Character} from "../types/RickAndMortyCharacter.ts";
import {useParams} from "react-router-dom";

type CharacterDetailProps = {
    characters: Character[];
}
export default function CharacterDetailCard(props: Readonly<CharacterDetailProps>) {

    const { id } = useParams();

    const character:(Character | undefined) = props.characters.find(c => c.id === Number(id));

    if (!character) {
        return <p>Character not found.</p>;
    }

    return (
        <div className="character-card">
            <img src={character.image} alt={character.name}/>
            <div className="character-card-info">
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
            </div>
        </div>
    )
}