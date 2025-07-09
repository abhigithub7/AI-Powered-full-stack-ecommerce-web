import React, { useContext } from 'react';
import { shopDataContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

function Card({ name, image, price, id }) {
  const { currency } = useContext(shopDataContext);

  const Navigate = useNavigate()

  return (
    <Link to={`/product/${id}`} className="w-[300px] max-w-[90%]">
      <div className="h-[400px] bg-[#ffffff0a] backdrop-blur-lg rounded-lg hover:scale-[102%] transition-transform duration-200 flex flex-col p-2 cursor-pointer border border-[#80808049]" onClick={()=>Navigate(`/productdetail/:id`)}>
        <img src={image} alt={name} className="w-full h-[70%] rounded-sm object-cover" />
        <div className="text-[#c3f6fa] text-lg font-medium py-2">{name}</div>
        <div className="text-[#c3f6fa] text-base font-light">
          {currency} {price}
        </div>
        <div>
          <h1 className='text-white py-3'>See More</h1>
        </div>
      </div>
    </Link>
  );
}

export default Card;
