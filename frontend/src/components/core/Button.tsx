import "./styles/Button.css"


interface ButtonProps {
    text: string
}

function Button({text} : ButtonProps) {
    return (
        <button className="button">
            <span className="buttonContent">{text}</span>
            </button>
    );
}

export default Button;