import React from 'react'

function Background({heroCount}) {
 
     if(heroCount ===0){
        return <img className='md:h-[600px]  w-[300vh] h-[300px]  float-left overflow-auto object-cover' src="https://img.freepik.com/free-photo/girl-yellow-wall-with-shopping-bags_1157-34353.jpg?semt=ais_hybrid&w=740" alt="" />

     }else if(heroCount ===1){
    return <img className='md:h-[600px] w-[300vh] h-[300px] float-right overflow-auto object-center' src="https://static.vecteezy.com/system/resources/thumbnails/048/909/710/small/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg" alt="" />

     }else if(heroCount ===2){
    return <img className='md:h-[600px] w-[300vh] h-[300px] float-right overflow-auto object-cover' src="https://img.freepik.com/free-photo/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop_1258-300002.jpg?semt=ais_hybrid&w=740" alt="" />

     }
     else if(heroCount ===3){
    return <img className='md:h-[600px] w-[300vh] h-[300px] float-right overflow-auto object-cover' src="https://img.freepik.com/premium-photo/man-is-holding-red-shopping-bags-yellow-wall-concept-shopping-supermarket-gifts_230311-8180.jpg" alt="" />

     }

}

export default Background
