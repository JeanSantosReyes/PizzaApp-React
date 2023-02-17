import { Link } from 'react-router-dom'
import { useCartContext } from '../hooks/useCartContext';
import { formatPrice } from '../utils/formatPrice';

export const Navbar = () => {

    const { totalCart } = useCartContext();

    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <Link
                    className='navbar-brand'
                    to='/'
                >
                    Pizza App {" "}
                    <img src='/assets/logo.png' alt='Logo' style={{ maxWidth: '40px' }} />
                </Link>
                <div className='d-flex gap-2'>
                    <Link
                        className='btn btn-outline-light'
                        to='/pizzas'
                    >
                        Pizzas
                    </Link>
                    <Link
                        className='btn btn-outline-info me-2'
                        to='/cart'
                    >
                        Cart: ${formatPrice(totalCart())}
                    </Link>
                </div>
            </div>
        </nav>
    )
}
