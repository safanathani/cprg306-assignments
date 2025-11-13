export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  return (
    <li
      onClick={() => onSelect(item)}
      className="bg-[#1e293b] text-white p-3 shadow rounded-md cursor-pointer hover:bg-[#334155] transition"
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
