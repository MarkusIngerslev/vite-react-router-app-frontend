import { useState } from "react";
import "./UserForm.css";

export default function UserForm() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, username, email, age };
        console.log(user);

        resetFrom();

        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        console.log("User added to database");
    };

    const resetFrom = () => {
        setName("");
        setUsername("");
        setEmail("");
        setAge("");
    };

    return (
        <>
            <h2>From coming soon</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Navn: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Brugernavn: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Alder: <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <button type="submit">Tilføj ny bruger</button>
            </form>
        </>
    );
}
