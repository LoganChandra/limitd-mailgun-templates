const express = require('express')
const app = express()
const port = 3001

app.set('view engine', 'pug')
app.use(express.static('img'));
app.get('/', (req, res) => {
    res.render('askIsLive.pug', {
        shoe_image: "http://stockx.imgix.net/images/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606321670",
        shoe_name: 'adidas Yeezy Boost 350 V2 Zebra',
        order_number: 12345678,
        shoe_size: 10,
        price: 800,
        processing_fee: 20,
        authentication_fee: 10,
        shipping_fee: 20,
        total: 850,
        button_link: '#',
        sender_address: 'Subang Jaya',
        unsubscribe_link: '#',
        facebook_link : '#',
        insta_link : '#',
        twitter_link : '#'
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})