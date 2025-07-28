export type MenuItemType = {
    id: number,
    name: string,
    price: number
}

export type OrderItemType = MenuItemType & {
    quantity: number
}