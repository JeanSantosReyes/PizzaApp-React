import { Notyf } from "notyf";
import { useState } from "react";
import { Pizza } from "../interfaces/PizzaInterface";
import { CartContext as Context } from "./CartContext";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const CartProvider = ({ children }: Props) => {

    const notyf = new Notyf();

    const [cart, setCart] = useState<Pizza[]>([])

    const addItem = (item: Pizza) => {
        const itemExists = cart.find((i) => i.id === item.id);
        if (itemExists) {
            setCart(
                cart.map((i) => (i.id === item.id ? { ...i, count: i.count + 1 } : i))
            );
            notyf.success(`Su orden de Pizza ${item.name} se ha actualizado`);
        } else {
            setCart([...cart, { ...item, count: 1 }]);
            notyf.success(`Pizza ${item.name} se ha agregado al carrito`);
        }
    };

    const removeItem = (item: Pizza) => {
        const itemExists = cart.find((i) => i.id === item.id);
        if (itemExists!.count === 1) {
            setCart(cart.filter((i) => i.id !== item.id));
            notyf.error(`Pizza ${item.name} se ha eliminado al carrito`);
        } else {
            notyf.success({ message: `Su orden de Pizza ${item.name} se ha actualizado`, background: 'orange' });
            setCart(
                cart.map((i) => (i.id === item.id ? { ...i, count: i.count! - 1 } : i))
            );
        }
    };

    const totalCart = () => cart.reduce((acc, item) => acc + item.price * item.count, 0);

    const findItemCount = (id: string) => {
        const item = cart.find((i) => i.id === id);
        return item ? item.count : 0;
    };

    return (
        <Context.Provider
            value={{
                cart,
                addItem,
                removeItem,
                totalCart,
                findItemCount
            }}
        >
            {children}
        </Context.Provider>
    )
}
