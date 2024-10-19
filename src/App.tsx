import { Header } from "./components/Header";
import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

export const App = () => {
  const { order, setTip, tip, addItem, removeItem, placeOrder } = useOrder()

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
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem}/>
              <TipPercentageForm setTip={setTip} tip={tip}/>
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/>
            </>
          ):(
            <p>The order is empty.</p>
          )}

        </div>
      </main>
    </>
  );
};
