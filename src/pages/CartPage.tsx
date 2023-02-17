import { useCartContext } from "../hooks/useCartContext"
import { CardItem } from '../components/CardItem';

export const CartPage = () => {

    const { cart, totalCart } = useCartContext()

    return (
        <>
            <h1 className="text-center my-5">Cart Checkout</h1>
            <ul className="list-group">
                {
                    cart.map((item) => (
                        <CardItem
                            key={item.id}
                            item={item}
                        />
                    ))
                }
                {
                    cart.length === 0 && (
                        <li className="list-group-item text-center">
                            <b>Cart is empty</b>
                        </li>
                    )
                }
                <li className="list-group-item list-group-item-action active text-end">
                    <b>Total: ${totalCart().toLocaleString("de-DE")}</b>
                </li>
            </ul>
        </>
    )
}
