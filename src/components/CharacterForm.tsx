import "./CharacterForm.css";
import React from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

type FormValues = {
    firstName: string,
    lastName: string,
    image: FileList | null,
    species: string,
    status: string,
}

type CharacterFormProps = {
    characters: Character[];
    setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}
export default function CharacterForm(props: Readonly<CharacterFormProps>) {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormValues>({mode: "all"});

    function handleOnSubmit (data: FormValues) {
        const newCharacter: Character = {
            id: Math.random(),
            name: data.firstName + " " + data.lastName,
            status: data.status,
            species: data.species,
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
            image: data.image?.item(0) ? URL.createObjectURL(data.image.item(0)!) : "",
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
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="form-group">
                    <input
                      type={"text"}
                      {...register("firstName", {
                          required: "First name is required",
                          minLength: {
                              value: 3,
                              message: "First name must at least 3 characters.",
                          },
                      })}
                      placeholder={"Firstname"}
                    />
                    {errors.firstName && <span className={"form-error"}>{errors.firstName.message}</span>}
                </div>
                <div className="form-group">
                    <input
                      type={"text"}
                      {...register("lastName", {
                          required: "Last name is required",
                          minLength: {
                              value: 3,
                              message: "Last name must at least 3 characters.",
                          },
                      })}
                      placeholder={"Lastname"}
                    />
                    {errors.lastName && <span className={"form-error"}>{errors.lastName.message}</span>}
                </div>
                <div className="form-group">
                    <input
                      type={"file"}
                      {...register("image", {
                          required: "A image file is required"
                      })}
                      placeholder={"Image"}
                    />
                    {errors.image && <span className={"form-error"}>{errors.image.message}</span>}
                </div>
                <select
                    {...register("species", {
                        required: "A species is required"
                    })}
                >
                    <option value={"human"}>Human</option>
                    <option value={"alien"}>Alien</option>
                </select>
                <select
                    {...register("status", {
                        required: "A staus is required"
                    })}
                >
                    <option value={"alive"}>Alive</option>
                    <option value={"dead"}>Dead</option>
                    <option value={"unknown"}>unknown</option>
                </select>
                <button disabled={!isValid} type="submit">Submit</button>
            </form>
        </>
    )
}