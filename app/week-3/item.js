export default function Item({ item }) {
  const itemName = item.name;
  const itemQuantity = item.quantity;
  const itemCategory = item.category;
  
  return (
    <li className="bg-slate-800 text-gray-100 p-5 rounded-lg shadow-lg mb-3">
      <h3 className="text-xl font-semibold mb-1">{itemName}</h3>
      <p className="text-base">Purchase {itemQuantity} from {itemCategory}</p>
    </li>
  );
}