import ItemList from "./item-list";

export default function Page() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-start"
      style={{ 
        background: 'linear-gradient(to bottom right, #fdf2f8, #fce7f3)',
        color: '#831843',
        padding: '4rem 2rem'
      }}
    >
      <h1 
        className="font-bold mb-20 text-center"
        style={{ 
          color: '#831843',
          fontSize: '4rem',
          marginBottom: '5rem'
        }}
      >
        🛒 Shopping List 🛒
      </h1>
      <div className="w-full max-w-7xl flex justify-center">
        <ItemList />
      </div>
    </main>
  );
}