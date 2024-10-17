import { useState } from "react"
import type { MenuItemType, OrderItemType } from "../types"

export const  useOrder = () => {
    const [order, setOrder] = useState<OrderItemType[]>([])


    const addItem = (item: MenuItemType) => {
        const itemExist = order.find(order => order.id === item.id)

        if(itemExist){
            const updatedOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity:orderItem.quantity + 1} 
                : orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItemType['id']) => {
        setOrder(order.filter( item => item.id !== id))
    }

    return {
        order,
        addItem,
        removeItem
    }
}