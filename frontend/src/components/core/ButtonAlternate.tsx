import "./styles/ButtonAlternate.css"
interface ButtonProps {
    text: string
}
function ButtonAlternate({text} : ButtonProps) {
    return (
        <button className="buttonAlternate">{text}</button>
    );
}

export default ButtonAlternate;