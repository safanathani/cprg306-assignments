import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-6">
      <h1 className="text-5xl font-extrabold text-gray-200 mb-8">
        Shopping List
      </h1>
      <div className="w-full max-w-md">
        <ItemList />
      </div>
    </main>
  );
}