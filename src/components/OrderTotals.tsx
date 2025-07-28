import { useMemo } from "react"
import type { OrderItemType } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItemType[]
    tip: number
    placeOrder: () => void
}

export const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
            <div className="space-y-4">
                <h2 className="font-black text-2xl text-gray-800 mb-6 flex items-center gap-2">
                    🧾 Totales y propinas:
                </h2>
                
                <div className="space-y-3 bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Subtotal a pagar:</span>
                        <span className="font-bold text-lg text-gray-800">{formatCurrency(subtotalAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Propina:</span>
                        <span className="font-bold text-lg text-indigo-600">{formatCurrency(tipAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t-2 border-indigo-200">
                        <span className="text-xl font-black text-gray-800">Total a pagar:</span>
                        <span className="font-black text-2xl text-indigo-700">{formatCurrency(totalAmount)}</span>
                    </div>
                </div>
            </div>

            <button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 p-4 rounded-xl text-white font-bold text-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                🚀 Guardar Orden
            </button>
        </div>
    )
}
