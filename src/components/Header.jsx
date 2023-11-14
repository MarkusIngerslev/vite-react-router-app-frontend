export default function Header(props) {
    return (
        <header>
            <h2>Hej {props.name}!</h2>
            <ul style={{ listStyleType: "none", marginRight: "40px" }}>
                <li>Brugernavn: {props.userName}</li>
                <li>Email: {props.email}</li>
                <li>Age: {props.age}</li>
            </ul>
        </header>
    );
}
