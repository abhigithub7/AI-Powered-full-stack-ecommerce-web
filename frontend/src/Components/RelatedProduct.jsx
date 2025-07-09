import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from '../Components/Title';
import Card from '../Components/Card'

function RelatedProduct({category, subCategory, currentProductId}) {
    const {products} = useContext(shopDataContext)
    const [related, setRelated] = useState([])


    useEffect(()=>{
        if(products.length > 0)
        {
          let  productCopy = products.slice()
          productCopy = productCopy.filter((item)=>category === item.category)
        productCopy = productCopy.filter((item)=>subCategory === item.subCategory)
          productCopy = productCopy.filter((item)=>currentProductId !== item._id)
          setRelated(productCopy.slice(0,4))

        }

    },[products,category,subCategory,currentProductId])


  return (
    <div className='my-[130px] md:my-[40px] md:px-[60px]'>
        <div className='ml-[20px] lg:ml-[80px]'>
            <Title text1={"REATED"} text2={'PRODUCT'}/>

        </div>
        <div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
          {
            related.map((item,index)=>(
                <Card key={index} name={item.name} price={item.price} id={item._id} image={item.image1}/>

            ))
          }
        </div>
      
    </div> 
  )
}

export default RelatedProduct
