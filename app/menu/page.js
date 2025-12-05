import CategoryTabs from "../components/menu/CategoryTabs";
// import ItemsList from "../components/menu/ItemsList";

async function getItems() {
  const res = await fetch("http://localhost:3000/api/items", { cache: "no-store" });
  return res.json();
}

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories", { cache: "no-store" });
  return res.json();
}

export default async function MenuPage() {
  const items = await getItems();
  const categories = await getCategories();

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6 text-center font-bold">Menu</h1>

      <CategoryTabs categories={categories} items={items} />
    </div>
  );
}
