// Button.js
function Button({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
