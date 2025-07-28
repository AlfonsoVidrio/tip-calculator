import { formatCurrency } from "../helpers";
import type { OrderItemType } from "../types";

type OrderProps = {
    order: OrderItemType[]
    removeItem: (id: number) => void
};

export const OrderContents = ({ order, removeItem }: OrderProps) => {
    return (
        <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
            <h2 className="font-black text-3xl text-gray-800 mb-6 flex items-center gap-2">
                🛒 Consumo
            </h2>
            <div className="space-y-3">
                {order.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex-1">
                            <p className="text-lg font-medium text-gray-800">
                                {item.name}
                            </p>
                            <div className="flex gap-4 mt-1">
                                <p className="text-sm text-gray-500">
                                    Precio: <span className="font-semibold text-indigo-600">{formatCurrency(item.price)}</span>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Cantidad: <span className="font-bold text-purple-600">{item.quantity}</span>
                                </p>
                            </div>
                            <p className="text-sm font-bold text-gray-700 mt-1">
                                Subtotal: <span className="text-indigo-700">{formatCurrency(item.price * item.quantity)}</span>
                            </p>
                        </div>

                        <button
                            onClick={() => removeItem(item.id)}
                            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 h-10 w-10 rounded-full text-white font-bold text-sm transition-all duration-200 transform hover:scale-110 shadow-md hover:shadow-lg">
                            ✕
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    );
};
