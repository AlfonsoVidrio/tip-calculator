import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

export const App = () => {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 shadow-xl">
        <h1 className="text-center text-5xl font-black text-white tracking-tight">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-4xl font-black text-gray-800 mb-8 border-b-4 border-indigo-500 pb-4">Menú</h2>
          <div className="space-y-4">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {order.length > 0 
          ?<>
              <OrderContents
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm 
            setTip={setTip}
            tip={tip}
          />

          <OrderTotals 
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
          </>
          : <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🍽️</div>
              <p className="text-gray-500 text-xl font-medium">La orden está vacía</p>
              <p className="text-gray-400 text-sm mt-2">Selecciona algunos platillos del menú</p>
            </div>}
      
        </div>
      </main>
    </div>
  );
};
