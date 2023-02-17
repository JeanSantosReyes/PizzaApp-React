import { Pizza } from "../interfaces/PizzaInterface"
import { useCartContext } from '../hooks/useCartContext';
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";


interface Props {
    item: Pizza
}

export const CardItem = ({ item }: Props) => {

    const { addItem, removeItem, findItemCount } = useCartContext();

    let navigate = useNavigate();

    const navegar = () => {
        navigate(`/pizzas/${item.id}`)
    }

    return (
        <li className="list-group-item list-group-item-action"  >
            <div className="d-flex justify-content-between align-items-center"  >
                <div className="d-flex align-items-center" >
                    <img
                        className="me-3"
                        src={item.img}
                        alt="Pizza"
                        width="100"
                    />
                    <div onClick={navegar} role="button">
                        <h5 className="mb-0" >{item.name.toUpperCase()}</h5>
                        <small className="text-muted">${formatPrice(item.price)}</small>
                    </div>
                </div>
                <div className="d-flex gap-1">
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeItem(item)}
                    >
                        -
                    </button>
                    <button className="btn btn-outline-dark btn-sm disabled">
                        {findItemCount(item.id)}
                    </button>
                    <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => addItem(item)}
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    )
}
