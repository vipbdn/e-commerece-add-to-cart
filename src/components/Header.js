import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const cartItem = useSelector((state)=> state.cart)

  return (
    <div>
        <Navbar style={{height:"60px",background:'black', color:'white'}} className='fixed-top'>
        <Container>
          <Link to='/' className='link'><h3>E-commerece</h3></Link>
          <div id='ex4'>
                       <Link to='/cart' className='link'> <span className='p1 fa-stack fa-2x has-badge' data-count={cartItem.length}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                        </Link>
                    </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
