import { Header } from "./components/Header";
import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

export const App = () => {
  const { order ,addItem, removeItem } = useOrder()

  return (
    <>
  <Header />
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-bold">Menu</h2>
          <div className="space-y-3 mt-10">
          {menuItems.map(item => <MenuItem key={item.id} item={item} addItem={addItem}/>)}
          </div>
        </div>
        <div className="border border-dashed border-blue-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem}/>
          <OrderTotals order={order}/>
        </div>
      </main>
    </>
  );
};
