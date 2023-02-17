import { useEffect, useState } from 'react';
import { Pizza } from '../interfaces/PizzaInterface';

export const GetAllPizzas = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('/pizza.json')
                .then((response) => response.json())
                .then((data: Pizza[]) => setPizzas(data))
                .finally(() => setLoading(false))
        }, 700);
    }, [])

    return {
        pizzas,
        loading
    }
}
