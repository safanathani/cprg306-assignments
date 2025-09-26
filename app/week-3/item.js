export default function Item({ name, quantity, category }) {
  const categoryColors = {
    dairy: { backgroundColor: "#fbcfe8", color: "#831843" },
    bakery: { backgroundColor: "#fecdd3", color: "#881337" },
    produce: { backgroundColor: "#f9a8d4", color: "#831843" },
    meat: { backgroundColor: "#f472b6", color: "#831843" },
    "canned goods": { backgroundColor: "#ec4899", color: "#ffffff" },
    "dry goods": { backgroundColor: "#db2777", color: "#ffffff" },
    household: { backgroundColor: "#be185d", color: "#ffffff" },
    default: { backgroundColor: "#fbcfe8", color: "#831843" },
  };

  const normalizedCategory = category.toLowerCase().replace(" section", "");
  const badgeColor = categoryColors[normalizedCategory] || categoryColors.default;

  return (
    <li 
      className="border rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
      style={{ 
        backgroundColor: 'white',
        borderColor: '#fbcfe8',
        color: '#831843',
        padding: '2.5rem',
        width: '20rem',
        minHeight: '12rem'
      }}
    >
      <div 
        className="font-semibold"
        style={{ 
          fontSize: '1.5rem',
          marginBottom: '1rem',
          lineHeight: '1.4'
        }}
      >
        {name}
      </div>
      <div 
        className="font-medium"
        style={{ 
          fontSize: '1.125rem',
          marginBottom: '1.5rem',
          color: '#be185d'
        }}
      >
        Buy <span className="font-bold">{quantity}</span>
      </div>
      <span
        className="inline-block px-4 py-2 font-semibold rounded-full shadow-sm"
        style={{
          fontSize: '0.875rem',
          ...badgeColor
        }}
      >
        {category}
      </span>
    </li>
  );
}