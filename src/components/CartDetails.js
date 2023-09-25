import React,{ useEffect, useState } from 'react'
import {Button, Container,Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem,removeAllItems, decreaseItem,increaseItem } from '../Redux/Store';

function CartDetails() {
    const [totalprice,setPrice] = useState(0);
    const [totalquantity,setTotalQuantity] = useState(0);

    const incQtyn = (e)=>{
        dispatch(increaseItem(e))
    }

    const decQtn = (e)=>{
        dispatch(decreaseItem(e))
    }
    
    const arr = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    const removeItemFromCart = (e)=>{
        dispatch(removeItem(e))
    }

    const emptyCart = ()=>{
        dispatch(removeAllItems())
    }

    const total = ()=>{
        let totalQty = 0
        let totalPrice = 0
        arr.map((ele, index)=>{
            totalPrice = ele.price * ele.qnty + totalPrice
            totalQty = ele.qnty + totalQty
            setPrice(totalPrice)
            setTotalQuantity(totalQty)
        })
    }

    useEffect(()=>{
        total()
        
    }, [total])

  return (
    <Container>
    <header className='d-flex justify-content-between align-items-center bg-dark text-white mt-2' >
        <h2 className='p-2'>Cart Calculation</h2>
        {arr.length >0? <Button className='bg bg-warning' onClick={()=>emptyCart()}>Empty Cart</Button> :''}
    </header>
    {arr.length===0 ? 
    <Table>
        <thead>
            <tr>
                <th><h2 className='text-center'>Cart is Empty</h2></th>
            </tr>
        </thead>
    </Table>
    
    :
    
      <Table>
        <thead>
            <tr>
                <th>Action</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            
                {
                    arr.map((item, index)=>{
                        return(
                            <tr>
                                <td onClick={()=>removeItemFromCart(index)}><i class="fa-solid fa-trash"></i></td>
                                <td>{item.dish}</td>
                                <td> <Button className='btn btn-info' onClick={item.qnty <=1 ?()=> removeItemFromCart(index) : ()=>decQtn(item)}>-</Button> {item.qnty} <Button className='btn btn-info' onClick={()=>incQtyn(item)}>+</Button> </td>
                                <td>{item.qnty * item.price}</td>
                            </tr>
                        )
                    })
                }
           
        </tbody>
        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th> Total Qty: {totalquantity}</th>
                <th>Total Price: {totalprice}</th>
            </tr>
        </tfoot>
      </Table>}
    </Container>
  )
}

export default CartDetails
