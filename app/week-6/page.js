import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-white mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}