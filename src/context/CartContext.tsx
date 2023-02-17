import { createContext } from 'react';
import { Pizza } from '../interfaces/PizzaInterface';

type ContextProps = {
    cart: Pizza[];
    addItem: (item: Pizza) => void;
    removeItem: (item: Pizza) => void;
    totalCart: () => number;
    findItemCount: (id: string) => number;
}

export const CartContext = createContext<ContextProps>({} as ContextProps)
CartContext.displayName = 'Context';