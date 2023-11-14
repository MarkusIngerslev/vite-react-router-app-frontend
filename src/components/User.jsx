import { useState, useEffect } from "react";
import Table from "./Table";

export default function User() {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await fetch("http://localhost:3000/users");
                const data = await res.json();
                setData(data);
            };
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return <Table data={data} />;
}
