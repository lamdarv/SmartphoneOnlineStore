import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { NavLink } from 'react-router-dom';
import logger from 'use-reducer-logger';
//import { category } from '../data'
import "../styles/categoryMain.css"

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, category: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
      default:
        return state;
  }
}

const CategoryMain = () => {

  const [{loading, error, category}, dispatch] = useReducer(logger(reducer), {
    category: [],
    loading: true,
    error: ''
  });

  //const [category, setCategory] = useState([]); //default is empty database or json, no category

  useEffect(() => {

    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/category');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
      
      //setCategory(result.data);
    }
    fetchData();

  }, []);

  return (
    <div className='c-container'>
      <div className="c-row">
          {loading ? (<h1 className='loading'>Loading...</h1>) : error ? (<h1 className='error'>{error}</h1>) : (category.map((item) => (
                <div className="c-col" key={item._id}>
                    <img src={item.image} alt={item.title} />
                    <div className="category-content">
                        <p>{item.title}</p>
                        <button className='c-btn'><NavLink to="/shop" activeClassName="active">Shop</NavLink></button>
                    </div>
                </div>
          ))
          )}
        
      </div>
    </div>
  )
}

export default CategoryMain
