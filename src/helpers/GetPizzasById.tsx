import { useState, useEffect } from 'react';
import { Pizza } from '../interfaces/PizzaInterface';

export const GetPizzasById = (id: string | undefined) => {

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
    }, [id])

    return {
        loading,
        pizza: pizzas.find(pizza => pizza.id === id)
    }
}

