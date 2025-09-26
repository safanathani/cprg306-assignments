import Item from "./item";

export default function ItemList() {
  const items = [
    { name: "Milk, 4 L 🥛", quantity: 1, category: "Dairy Section" },
    { name: "Bread 🍞", quantity: 2, category: "Bakery Section" },
    { name: "Eggs, dozen 🥚", quantity: 2, category: "Dairy Section" },
    { name: "Bananas 🍌", quantity: 6, category: "Produce Section" },
    { name: "Broccoli 🥦", quantity: 3, category: "Produce Section" },
    { name: "Chicken Breasts, 1 kg 🍗", quantity: 1, category: "Meat Section" },
    { name: "Pasta Sauce 🥫", quantity: 3, category: "Canned Goods Section" },
    { name: "Spaghetti, 454 g 🍝", quantity: 2, category: "Dry Goods Section" },
    { name: "Toilet Paper, 12 pack 🧻", quantity: 1, category: "Household Section" },
    { name: "Paper Towels, 6 pack 🧻", quantity: 1, category: "Household Section" },
    { name: "Dish Soap 🧽", quantity: 1, category: "Household Section" },
  ];

  return (
    <ul 
      className="justify-items-center"
      style={{
        display: 'grid',
        gap: '3rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
        width: '100%'
      }}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}