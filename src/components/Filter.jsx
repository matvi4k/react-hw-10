export function Filter({ value, onChange }) {
  return (
    <label className="filter">
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
