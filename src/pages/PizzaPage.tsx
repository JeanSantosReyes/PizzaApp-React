import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { GetPizzasById } from '../helpers/GetPizzasById';
import { useCartContext } from '../hooks/useCartContext';

export const PizzaPage = () => {

    const { addItem } = useCartContext();

    const { id } = useParams();

    const { pizza, loading } = GetPizzasById(id)

    if (loading) return <Loading />

    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={pizza?.img}
                        className="img-fluid rounded-start h-100"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="fs-1">{pizza?.name!.toUpperCase()}</h5>
                        <p className="card-text">{pizza?.desc}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                {pizza?.ingredients!.map((ingredient, index) => (
                                    <span key={ingredient}>
                                        {ingredient}
                                        {pizza.ingredients!.length !== index + 1 && ", "}
                                    </span>
                                ))}
                            </small>
                        </p>
                        <Link
                            className="btn btn-outline-primary"
                            onClick={() => addItem(pizza!)}
                            to="/cart"
                        >
                            Comprar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
