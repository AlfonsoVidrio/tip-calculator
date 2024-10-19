import { useMemo } from "react"
import { OrderItemType } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItemType[]
    tip: number
    placeOrder: () => void
}

export const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount  = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-bold text-2xl">Totals and tips.</h2>
                <p>Subtotal to pay: {' '}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Tip: {' '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total to pay: {' '}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount===0}
                onClick={placeOrder}
            >Save Order</button>

        </>
    )
}
