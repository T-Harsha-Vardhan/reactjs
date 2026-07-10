import { useState } from "react";
import { nanoid } from "nanoid";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addShoppingItem = () => {
    setShoppingList([
      ...shoppingList,
      {
        name,
        quantity,
      },
    ]);
  };

  return (
    <div className="flex bg-red-50 h-full w-full p-5">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter name..."
          className="border rounded-sm px-4 py-1"
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          placeholder="Enter quantity..."
          className="border rounded-sm px-4 py-1"
        />
        <button
          className="bg-blue-500 text-white py-1"
          onClick={addShoppingItem}
        >
          Add Item
        </button>
      </div>
      <ul>
        {shoppingList.map((item) => {
          return (
            <li key={nanoid()} className="">
              {item.name} {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
