import type { MenuItemType } from "../types"

type MenuItemProps = {
    item:  MenuItemType
    addItem: (item:MenuItemType) => void
}

export const MenuItem = ({item, addItem}: MenuItemProps) => {
    return (
        <button
            className="group bg-gradient-to-r from-white to-gray-50 border-2 border-indigo-200 hover:border-indigo-400 hover:from-indigo-50 hover:to-purple-50 w-full p-4 flex justify-between rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            onClick={() => addItem(item)}
        >
            <p className="text-gray-700 font-medium group-hover:text-indigo-700 transition-colors">{item.name}</p>
            <p className="font-black text-indigo-600 group-hover:text-purple-600 transition-colors">${item.price}</p>
        </button>
    )
}
