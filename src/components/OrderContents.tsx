import { formatCurrency } from "../helpers"
import type { MenuItemType, OrderItemType } from "../types"

type OrderContentsProps = {
    order: OrderItemType[]
    removeItem: (id: MenuItemType['id']) => void
}

export const OrderContents = ({order, removeItem}: OrderContentsProps) => {
return (
    <div>
        <h2 className="font-bold text-3xl">Order</h2>
        
        <div className="space-y-3 mt-10">
            {order.length > 0 
            ? ( order.map( item => 
                <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                    <div>
                    <p>
                        {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                    Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                    </div>


                    <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-semibold hover:bg-red-500">
                        X
                    </button>
                </div>
            ))
            :<p>The order is empty.</p>}
        </div>
    </div>
)
}
