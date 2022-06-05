import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import '../styles/productscreencard.css'
import { Store } from '../Store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//import { products } from '../data';

const ProductScreenCard = ({product}) => {

    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(''); //default is empty

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {cart, wish} = state;
    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1; //if existItem than quantity + 1 in cart if not than 1
        
        //this you can put but you don’t have to
        const { data } = await axios.get(`/api/products/slug/${product.slug}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock.');
            return;
        }

        ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity },
        });

        navigate('/cart');
    };

    const addToWishHandler = async () => {

        const existItem = wish.wishItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity : 1;
        
        //const { data } = await axios.get(`/api/products/slug/${product.slug}`);
        if (existItem) {
            window.alert('Sorry. You have already added the product to your wish list.');
            return;
        }
        
        ctxDispatch({
          type: 'WISH_ADD_ITEM',
          payload: { ...product, quantity},
          });

        navigate('/wish');
    }

  return (
    <>
        <Navbar />
        <div className='screen-container'>
            <div className="screen-row">
                <div className="screen-col">
                    <div className="screen-images">
                        <div className="screen-top">
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={selectedImage || product.image} alt={product.title} />
                                </TransformComponent>
                            </TransformWrapper>
                            {/*<img src={selectedImage || product.image} alt={product.title} />*/}
                        </div>
                        <div className="screen-bottom">
                            <img src={product.image} onClick={() => setSelectedImage(`${product.image}`)} alt={product.title} />
                            <img src={product.image1} onClick={() => setSelectedImage(`${product.image1}`)} alt={product.title} />
                            <img src={product.image2} onClick={() => setSelectedImage(`${product.image2}`)} alt={product.title} />
                            <img src={product.image3} onClick={() => setSelectedImage(`${product.image3}`)} alt={product.title} />
                        </div>
                    </div>
                </div>
                <div className="screen-col">
                    <div className="first-div div">
                        <h2 className='title'>{product.title}</h2>
                        <p className='category'>{product.category}</p>
                    </div>
                    <div className="second-div div">
                        <span className="price">Price: IDR {product.price}</span>
                        <div className="quantity">Stock: {product.countInStock}  </div>
                    </div>
                    <div className="third-div div">
                        <p className="desc">{product.OS}</p>
                        <p className="desc">{product.CPU}</p>
                        <p className="desc">{product.RAM}</p>
                        <p className="desc">{product.Memori}</p>
                        <p className="desc">{product.Dimensi}</p>
                        <p className="desc">{product.Layar}</p>
                        <p className="desc">{product.Kamera_utama}</p>
                        <p className="desc">{product.Kamera_belakang}</p>
                        <p className="desc">{product.Baterai}</p>
                        <p className="desc">{product.Warna}</p>
                    </div>
                    <div className="fourth-div div">
                        {product.countInStock === 0 ? (
                            <button className='cart cart-out' disabled >Out of stock</button>
                            ) : (
                            <button className='cart' onClick={addToCartHandler}>Add to Cart</button>)
                        }
                        <button className='wish' onClick={addToWishHandler}>Add to Wish</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    
  )
}

export default ProductScreenCard
