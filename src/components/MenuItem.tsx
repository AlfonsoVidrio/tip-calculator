import type { MenuItemType } from "../types";

type MenuItemProps = {
    item: MenuItemType;
    addItem: (item:MenuItemType) => void;
};

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <button
            className="border-2 rounded-md border-blue-300 hover:bg-blue-200 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    );
};
