import { Notyf } from "notyf";
import { Pizza } from '../interfaces/PizzaInterface';

type Action =
    | { type: 'ADD_ITEM', payload: Pizza }
    | { type: 'REMOVE_ITEM', payload: Pizza }

export const CartReducer = (state: Pizza[], action: Action): Pizza[] => {

    const itemExists = state.find(i => i.id === action.payload.id)
    const notyf = new Notyf();

    switch (action.type) {

        case 'ADD_ITEM':
            if (itemExists) {
                notyf.success(`Su orden de Pizza ${action.payload.name} se ha actualizado`);
                const itemUpd = state.map((i) => (i.id === action.payload.id ? { ...i, count: i.count! + 1 } : i))
                return itemUpd;
            } else {
                notyf.success(`Pizza ${action.payload.name} se ha agregado al carrito`);
                return [...state, { ...action.payload, count: 1 }];
            }

        case 'REMOVE_ITEM':
            if (itemExists!.count === 1) {
                notyf.error(`Pizza ${action.payload.name} se ha eliminado al carrito`);
                const itemDel = state.filter(i => i.id !== action.payload.id);
                return itemDel;
            } else {
                notyf.success({ message: `Su orden de Pizza ${action.payload.name} se ha actualizado`, background: 'orange' });
                const itemUpdDel = state.map(i => i.id === action.payload.id ? { ...i, count: i.count! - 1 } : i)
                return itemUpdDel;
            }

        default:
            throw new Error(`Unhandled action type: ${action}`)
    }

}