import "./CharSelect.css";

export default function CharSelect({ children, onSelect }) {
  return (
    <div id="Character-btn">
      <button onClick={onSelect}>{children}</button>
    </div>
  );
}
