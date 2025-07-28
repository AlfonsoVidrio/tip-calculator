import { useState } from "react"
import type { MenuItemType, OrderItemType } from "../types"

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItemType[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item:MenuItemType) => {
        const itemExists = order.find(orderItem => orderItem.id == item.id)
        if (itemExists) {
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }

    }

    const removeItem = (id:MenuItemType['id']) => {
        setOrder(order.filter( item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}
