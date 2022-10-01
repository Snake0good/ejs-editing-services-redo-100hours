const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


// just for test purposes
const YOUR_DOMAIN = 'http://localhost:2121';
const storeItem = { priceInCents: 5000, name: "5 pages - Editing" }


module.exports = {   
    stripePayment: async (req, res) => {
        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                line_items: [
                  {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: 1
                  },
                ],
                success_url: `${YOUR_DOMAIN}/success`,
                cancel_url: `${YOUR_DOMAIN}/cancel`,
            });

            res.redirect(303, session.url)
        } catch(err) {
            res.status(500).json({ error: err.message })
            // res.render('index.ejs')
        }
        
        
    }
}