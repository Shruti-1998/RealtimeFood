import axios from 'axios'
import Noty from  'noty'
import { initAdmin } from './admin'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')

function updateCart(burger) {
       axios.post('/update-cart', burger).then(res => {
             console.log(res)
             cartCounter.innerText = res.data.totalQty
             new Noty({
                 type: 'success',
                 timeout: 1000,
                 text: 'Item added to cart',
                 progressBar: false
                 
             }).show();
       }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Something went wrong',
            progressBar: false
            
        }).show();
       })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let burger = JSON.parse(btn.dataset.burger)
        updateCart(burger)
        //console.log(burger)
    })
})

//Remove alert mesage after X seconds
const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 2000)
}

initAdmin()