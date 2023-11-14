import { useState } from "react";

export default function Button() {
    const [count, setCount] = useState(0);

    return (
        <button
            onClick={() => {
                // console.log("Du har trykket på mig")
                setCount(count + 1);
            }}
        >
            Dette er din tællerværdi. {count}
        </button>
    );
}
