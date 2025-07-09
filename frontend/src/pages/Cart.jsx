import React, { useEffect, useState, useContext } from 'react'
import Title from '../Components/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { ImBin } from "react-icons/im";
import CartTotal from '../Components/CartTotal'

function Cart() {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    const tempData = []
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        const quantity = cartItem[productId][size]
        if (quantity > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity,
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItem])

  return (
    <div className="min-h-screen w-full px-4 py-6 bg-gradient-to-l from-[#0e0d0d] to-[#000000]">
      <div className="text-center mt-20">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div className="w-full flex flex-col gap-6 mt-10">
        {cartData.map((item, index) => {
          const product = products.find((p) => p._id === item._id)
          if (!product) return null

          return (
            <div
              key={index}
              className="w-full bg-[#51808048] rounded-2xl p-4 flex flex-col md:flex-row items-center md:items-start gap-4 shadow-sm border border-[#555555]"
            >
              <img
                className="h-[100px] w-[100px] rounded-md object-cover"
                src={product.image1}
                alt={product.name}
              />

              <div className="flex-1 flex flex-col gap-2 text-left">
                <p className="text-[20px] md:text-[24px] font-medium text-[#f3f9fc]">{product.name}</p>
                <div className="flex gap-4 items-center">
                  <p className="text-[18px] text-[#aaf4e7]">
                    {currency}
                    {product.price}
                  </p>
                  <span className="h-[35px] w-[35px] text-[16px] text-white bg-[#5188b4] rounded-md flex items-center justify-center border border-white">
                    {item.size}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <input
                  type="number"
                  min={1}
                  className="w-[60px] md:w-[80px] px-2 py-1 text-white bg-[#518080b4] border border-[#9ff9f9] rounded-md text-center"
                  value={item.quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value)
                    if (val > 0) updateQuantity(item._id, item.size, val)
                  }}
                />
                <ImBin
                  className="text-[#9ff9f9] w-[24px] h-[24px] cursor-pointer"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center md:justify-start items-end mt-10">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <button
            className="text-[18px] hover:bg-slate-600 bg-[#495b61c9] border border-[#80808049] py-3 px-10 rounded-2xl text-white shadow-md mt-6 mx-auto block"
            onClick={() => {
              if (cartData.length > 0) {
                Navigate('/placeorder')
              } else {
                console.log('Cart is empty')
              }
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
