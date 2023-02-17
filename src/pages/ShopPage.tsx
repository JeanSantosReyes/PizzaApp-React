import { Card } from "../components/Card"
import { Loading } from "../components/Loading"
import { GetAllPizzas } from "../helpers/GetAllPizzas"

export const ShopPage = () => {

    const { pizzas, loading } = GetAllPizzas()

    return (
        <>
            <h1 className="text-center">Pizzas</h1>
            <div className="row">
                {
                    loading
                        ? <Loading />
                        : pizzas.map((pizza) => (
                            <Card
                                key={pizza.id}
                                pizza={pizza}
                            />
                        ))
                }
            </div>
        </>
    )
}
