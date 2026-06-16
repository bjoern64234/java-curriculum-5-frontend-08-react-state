import React, {FormEvent, useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";

type CharacterFormProps = {
    characters: Character[];
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}
export default function CharacterForm(props: Readonly<CharacterFormProps>) {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [species, setSpecies] = useState<string>("human");
    const [file, setFile] = useState<FileList | null>(null);
    const [status, setStatus] = useState<string>("alive");

    const navigate = useNavigate();

    function handleSubmit (e: FormEvent) {
        e.preventDefault();

        const newCharacter: Character = {
            id: Math.random(),
            name: firstName + " " + lastName,
            status: status,
            species: species,
            type: "",
            gender: "",
            origin: {
                name: "",
                url: ""
            },
            location: {
                name: "",
                url: ""
            },
            image: file?.item(0) ? URL.createObjectURL(file.item(0)!) : "",
            episode: [],
            url: "",
            created: ""
        }

        props.setCharacters((prev: Character[]) => [newCharacter, ...prev]);
        navigate("/characters");
    }

    return (
        <>
            <h2>Create a new character</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    required={true}
                    name={"firstname"}
                    placeholder={"Firstname"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type={"text"}
                    required={true}
                    name={"lastname"}
                    placeholder={"Lastname"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type={"file"}
                    required={true}
                    name={"image"}
                    placeholder={"Image"}
                    onChange={(e) => setFile(e.target.files)}
                />
                <select
                    name={"species"}
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                >
                    <option value={"human"}>Human</option>
                    <option value={"alien"}>Alien</option>
                </select>
                <select
                    name={"status"}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value={"alive"}>Alive</option>
                    <option value={"dead"}>Dead</option>
                    <option value={"unknown"}>unknown</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}