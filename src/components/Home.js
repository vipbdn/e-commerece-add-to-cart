import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import Cardsdata from './Cardsdata'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Store';

const Home = () => {
  const [cartData, setCartData] = useState(Cardsdata)
  const dispatch = useDispatch()



  const send = (e)=>{
    dispatch(addToCart(e))
  }


  return (
    <>
    <section className='item_section mt-4 container'>
    <h2 className='px-4' style={{fontWeight:'400'}}>Restaurants in Budaun</h2>
    <div className='row mt-2 d-flex justify-content-around align-items-center'>
      {
        cartData.map((element)=>{
          return(
            <Card style={{width:"22rem", border: 'none'}}>
       <Card.Img variant='top' className='cd' src={element.imgdata} alt=''/>
        <div className='card_body box-shadow'>
          <div className="upper_data d-flex justify-content-between align-items-center">
            <h4 className='mt-2'>{element.dish}</h4>
            <span>{element.rating}  <i class="fa-solid fa-star"></i></span>
          </div>
          <Button className='bg bg-warning ' onClick={()=>send(element)}>Add TO Cart</Button>
        </div>
      </Card>
          )
        })
      }
    </div>
    </section>
    </>
  )
}

export default Home
