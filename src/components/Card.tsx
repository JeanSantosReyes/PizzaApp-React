import { Link } from "react-router-dom";
import { Pizza } from "../interfaces/PizzaInterface"
import { formatPrice } from "../utils/formatPrice";
import { useCartContext } from '../hooks/useCartContext';

interface Props {
    pizza: Pizza;
}

export const Card = ({ pizza }: Props) => {

    const { id, name, img, ingredients, price } = pizza;

    const { addItem } = useCartContext()

    return (
        <article className="mb-2 col-12 col-md-6 col-xl-3">
            <div className="card">
                <img
                    src={img}
                    className="card-img-top"
                    alt="card description"
                />
                <div className="card-body">
                    <h5 className="text-center">
                        <b>{name.toUpperCase()}</b>
                    </h5>
                    <h6>Ingrediente</h6>
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <h5>
                        <b>Precio: ${formatPrice(price)}</b>
                    </h5>
                    <div className="d-flex gap-2">
                        <Link
                            to="/cart"
                            className="btn btn-outline-primary"
                            onClick={() => addItem(pizza)}
                        >
                            Comprar
                        </Link>
                        <Link
                            to={`/pizzas/${id}`}
                            className="btn btn-outline-danger"
                        >
                            Ver detalles
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
