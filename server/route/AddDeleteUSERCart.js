const express = require('express')
const router = express.Router()
const JWT = require('../Token/JWT')
const productall = require('../database/productall')
const DBCart = require('../database/DBCart')
router.post('/deleteCart', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  const productInfo = req.body
  DBCart.findOne({ token: data }).then((result) => {
    result.cart.forEach(async (value, index) => {
      if (value.name === productInfo.name) {
        result.count -= (value.count * value.afterprice)
        result.height -= 200
        result.productcount -= 1
        result.cart.splice(index, 1)
        await DBCart.updateOne({ token: data }, { count: result.count, cart: result.cart, height: result.height, productcount: result.productcount })
        const datas = {}
        datas.cart = result.cart
        datas.count = result.count
        datas.height = result.height
        datas.productcount = result.productcount
        res.json(datas)
      }
    })
  })
})
router.post('/addCart', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  const productInfo = req.body
  DBCart.findOne({ token: data }).then((result) => {
    result.cart.forEach((value) => {
      if (value.name === productInfo.name) {
        value.count += 1
        result.count += (value.afterprice * 1)
        DBCart.updateOne({ token: data }, { count: result.count, cart: result.cart }).then((result1) => {
          DBCart.findOne({ token: data }).then((result2) => {
            res.json(result2)
          })
        })
      }
    })
  })
})
router.post('/subCart', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  const productInfo = req.body
  DBCart.findOne({ token: data }).then((result) => {
    result.cart.forEach((value) => {
      if (value.name === productInfo.name) {
        //   當count =1就不能在減了，購物車數量不能等於0或賦數
        if (value.count > 1) {
          value.count -= 1
          result.count -= (value.afterprice * 1)
          DBCart.updateOne({ token: data }, { count: result.count, cart: result.cart }).then((result1) => {
            DBCart.findOne({ token: data }).then((result2) => {
              res.json(result2)
            })
          })
        } else {
          res.json(result)
        }
      }
    })
  })
})
router.post('/handInputCart', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  const productInfo = req.body
  DBCart.findOne({ token: data }).then((result) => {
    result.cart.forEach((value) => {
      if (value.name === productInfo.name) {
        result.count += (value.afterprice * (productInfo.value - value.count))
        value.count = productInfo.value
        DBCart.updateOne({ token: data }, { count: result.count, cart: result.cart }).then((result1) => {
          DBCart.findOne({ token: data }).then((result2) => {
            res.json(result2)
          })
        })
      }
    })
  })
})
router.get('/createCart', (req, res) => {
  const token = req.signedCookies.Token
  const { data } = JWT.checkToken(token)
  DBCart.findOne({ token: data }).then((result) => {
    res.json(result)
  })
})
module.exports = router
