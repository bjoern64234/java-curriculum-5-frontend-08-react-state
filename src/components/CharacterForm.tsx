import {FormEvent, useState} from "react";

export default function CharacterForm() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [species, setSpecies] = useState<string>("");
    const [file, setFile] = useState<FileList | null>(null);
    const [status, setStatus] = useState<string>("alive");

    function handleSubmit (e: FormEvent) {
        e.preventDefault();
        console.log(firstName, lastName, species, file, status);
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
                    type={"text"}
                    required={true}
                    name={"species"}
                    placeholder={"Species"}
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />
                <input
                    type={"file"}
                    required={true}
                    name={"image"}
                    placeholder={"Image"}
                    onChange={(e) => setFile(e.target.files)}
                />
                <select
                    name={"status"}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value={"alive"}>alive</option>
                    <option value={"dead"}>dead</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}