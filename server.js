const express = require('express')
const Email = require('email-templates');

const app = express()
const port = 3001

app.set('view engine', 'pug')
app.use(express.static('img'));

app.get('/', (req, res) => {
  
    res.render('orderPlaced_SOLD.pug', {
        shoe_image: "http://stockx.imgix.net/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606321670",
        shoe_name: 'adidas Yeezy Boost 350 V2 Zebra',
        order_number: 12345678,
        shoe_size: 10,
        price: 800,
        processing_fee: 20,
        authentication_fee: 10,
        shipping_fee: 20,
        total: 850,
        button_link: 'https://google.com',
        sender_address: 'A-2-1, No. 36G Jalan Tanjung SD13/2, Bandar Sri Damansara, 52200 , Kuala Lumpur',
        unsubscribe_link: '#',
        facebook_link : '#',
        insta_link : '#',
        twitter_link : '#',
        flow_type: 'Bid'
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})