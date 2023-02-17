import { useContext } from "react"
import { CartContext } from "../context"

export const useCartContext = () => {

    const { cart, addItem, removeItem, totalCart, findItemCount } = useContext(CartContext)

    return {
        // Methods
        addItem,
        removeItem,
        totalCart,
        findItemCount,
        // Properties
        cart
    }
}