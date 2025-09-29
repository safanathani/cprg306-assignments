import Item from "./item";

export default function ItemList() {
  const groceryItem1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
  const groceryItem2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
  const groceryItem3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
  const groceryItem4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
  const groceryItem5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
  const groceryItem6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
  const groceryItem7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };
  const groceryItem8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
  const groceryItem9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
  const groceryItem10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
  const groceryItem11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
  const groceryItem12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <ul className="space-y-3">
      <Item item={groceryItem1} />
      <Item item={groceryItem2} />
      <Item item={groceryItem3} />
      <Item item={groceryItem4} />
      <Item item={groceryItem5} />
      <Item item={groceryItem6} />
      <Item item={groceryItem7} />
      <Item item={groceryItem8} />
      <Item item={groceryItem9} />
      <Item item={groceryItem10} />
      <Item item={groceryItem11} />
      <Item item={groceryItem12} />
    </ul>
  );
}