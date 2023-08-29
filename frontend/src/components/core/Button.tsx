import "./styles/Button.css"


interface ButtonProps {
    text: string,
    onClick?: () => void
}

function Button({text, onClick} : ButtonProps) {
    return (
        <button onClick={onClick} className="button">
            <span className="buttonContent">{text}</span>
            </button>
    );
}

export default Button;