import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div className="portada">
            <div style={{ position: 'absolute' }}>
                <div className="container bg-light bg-opacity-50 py-5 rounded" style={{
                    width: '20em', display: 'flex', justifyContent: 'center'
                }} >
                    < Link to='/pizzas' className="btn btn-dark btn-lg m-1" > Pizzas</Link>
                    <Link to='/cart' className="btn btn-dark btn-lg m-1">Cart</Link>
                </div>
            </div >
        </div >
    )
}
