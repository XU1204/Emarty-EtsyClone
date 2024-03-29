import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Product from "../Product/Product";
import './Homepage.css'
// import github from '../../assets/github.png'
// import linkedin from '../../assets/linkedin.png'

function Homepage() {
    const user = useSelector(state => Object.values(state.session)[0])
    let hello
    if (!user) {
        hello = (
            <p>Holiday magic starts with these merry finds.</p>
        )
    } else {
        hello = (
            <p>Welcome back, {user.username}!</p>
        )
    }

    return (
        <div id='hp-container'>
            <div className="hp-top">
                {hello}
                <div className="category-container">
                    <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/products/Categories/1'>
                        <div className="each-category-container">
                            <img className="category-img" src='http://res.cloudinary.com/mejuri-com/image/upload/v1668465890/campaigns/2022/Holiday/Homepage/01%20Homepage/Gift%20Guide%20Grid/DT/Gifts300-500_-DT-_2x.jpg' alt='Jewelry & Accessories'></img>
                            <div className="category-name">Jewelry & Accessories</div>
                        </div>
                    </NavLink>
                    <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/products/Categories/2'>
                        <div className="each-category-container">
                            <img className="category-img" src="https://media.istockphoto.com/id/1257563298/photo/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-text.jpg?s=612x612&w=0&k=20&c=UTL3KlMvLkteLe_9l3QbMklBcyaKQM5j6mcDxxtTr4Y=" alt='Clothing & Shoes'></img>
                            <div className="category-name">Clothing & Shoes</div>
                        </div>
                    </NavLink>
                    <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/products/Categories/3'>
                        <div className="each-category-container">
                            <img className="category-img" src="https://shapestack.com/SS/wp-content/uploads/2020/02/home-letters-with-wreath.jpg" alt='Home & Living'></img>
                            <div className="category-name">Home & Living</div>
                        </div>
                    </NavLink>
                    <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/products/Categories/4'>
                        <div className="each-category-container">
                            <img className="category-img" src="https://www.panda-q.com/1985-large_default/baby-panda-toy-with-milk-bottle-55-cute-baby-panda-stuffed-animal.jpg" alt='Toys & Entertainment'></img>
                            <div className="category-name">Toys & Entertainment</div>
                        </div>
                    </NavLink>
                    <NavLink style={{ color: 'black', textDecoration: 'none'}} to='/products/Categories/5'>
                        <div className="each-category-container">
                            <img className="category-img" src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGR2YW5nb2doLXNlbGYtcG9ydHJhaXQtbTAxLWpvYjY2MV8yLWwxMDBvNmVmLmpwZw.jpg" alt='Art & Collectibles'></img>
                            <div className="category-name">Art & Collectibles</div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div id='popular-product-wrapper'>
                <Product />
            </div>
        </div>
    )
}

export default Homepage;
