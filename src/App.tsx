import { Header } from "./components/Header";
import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

export const App = () => {
  const { addItem } = useOrder()

  return (
    <>
  <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
          {menuItems.map(item => <MenuItem key={item.id} item={item} addItem={addItem}/>)}
          </div>
        </div>
        <div>
        <h2>Order</h2>
        </div>
      </main>
    </>
  );
};
