import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
  const {products} = useContext(shopDataContext)
  const [bestSeller , setBestSeller] = useState([])

  useEffect(()=>{
    let FilterProduct = products.filter((item)=>item.bestSeller)

    setBestSeller(FilterProduct.slice(0,4));

  },[products])
  return (
    <div className=''>
      <div className='h-[8%] w-full text-center mt-[50px] '>
           <Title text1={"BEST"} text2={"SELLER"}    />
           <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Tried, Tested, Loved Dsicover Our All-Time Best Seller</p>
      </div>

      <div className='w-[100%] h-[50%] mt-[30px]  items-center justify-center flex flex-wrap gap-8 md:gap-[60px]'>
          {
            bestSeller.map((item,index)=>(
              <Card
              key={index}
              name={item.name}
              id={item._id}
              image={item.image1}
              price={item.price}
              />
            ))
          }
      </div>
      
    </div>
  )
}

export default BestSeller
