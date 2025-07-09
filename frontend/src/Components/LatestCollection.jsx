import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {

  const {products} = useContext(shopDataContext)
  const [latestProduct,setLatestProduct]  = useState([])

  useEffect(()=>{
    setLatestProduct(products.slice(0,8))

  },[products])
  return (
    <div>
      <div className='h-[8%] w-[100%] text-center md:mt-[1px]  '>
        <Title  text1={"LATEST"}  text2={"COLLECTIONS"}  />
        <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Step Into Style - New Collection Dropping this Season !</p>
      </div>

      <div className='w-[101%] h-[50%] mt-[30px]  items-center justify-center flex flex-wrap gap-8 md:gap-[60px]'>
        {
          latestProduct.map((item ,index)=>(
            <Card key={index._id} name={item.name} image={item.image1} id={item._id} price={item.price}/>
          ))

        }
      </div>
      
    </div>
  )
}

export default LatestCollection
