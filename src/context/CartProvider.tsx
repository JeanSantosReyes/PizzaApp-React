import { useReducer } from 'react';

import { Pizza } from '../interfaces/PizzaInterface';

import { CartContext as Context } from "./CartContext";
import { CartReducer as Reducer } from "./CartReducer";

const INITIAL_STATE: Pizza[] = []

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const CartProvider = ({ children }: Props) => {

    const [cart, dispatch] = useReducer(Reducer, INITIAL_STATE)

    const addItem = (item: Pizza) => dispatch({ type: 'ADD_ITEM', payload: item });

    const removeItem = (item: Pizza) => dispatch({ type: 'REMOVE_ITEM', payload: item });

    const findItemCount = (id: string) => {
        const item = cart.find(i => i.id === id);
        return item ? item.count! : 0;
    }

    const totalCart = () => cart.reduce((acc, { price, count }) => acc + price! * count!, 0)

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
