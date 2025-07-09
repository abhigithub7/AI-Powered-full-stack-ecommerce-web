/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopDataContext } from '../context/ShopContext';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import RelatedProduct from '../Components/RelatedProduct';
import {toast} from 'react-toastify'
function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart } = useContext(shopDataContext);
  const [productData, setProductData] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const product = products.find(item => item._id === id);
    if (product) {
      setProductData(product);
      const imgArray = [product.image1, product.image2, product.image3, product.image4].filter(Boolean);
      setImages(imgArray);
      setSelectedImage(product.image2 || imgArray[0] || '');
    }
  }, [id, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-black to-[#010202] pt-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-5">
        
        {/* Left: Images */}
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:w-1/2">
          
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 justify-center">
            {images.map((img, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-24 md:h-28 border border-gray-300 bg-slate-300 rounded-md overflow-hidden"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover cursor-pointer rounded-md"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full lg:w-[400px] h-[300px] md:h-[500px] border border-gray-300 rounded-md overflow-hidden">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/2 text-white space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{productData.name?.toUpperCase()}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <IoIosStar key={i} className="text-yellow-400 text-xl" />
            ))}
            <IoIosStarHalf className="text-yellow-400 text-xl" />
            <p className="ml-2 text-lg font-semibold">(124)</p>
          </div>

          <p className="text-2xl font-semibold">₹{productData.price}</p>

          <p className="text-base md:text-lg">
            {productData.description} Buy and get 30% off stylish outfits and more.
          </p>

          {/* Size selection */}
          {productData.sizes?.length > 0 && (
            <div className="space-y-2">
              <p className="text-xl font-semibold">Select Size</p>
              <div className="flex flex-wrap gap-3">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 border rounded-md bg-slate-300 ${
                      item === size ? "text-black font-bold text-lg" : ""
                    }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            className="bg-[#242222c9] text-white mt-4 px-6 py-3 rounded-xl shadow-md hover:bg-gray-700 transition"
            onClick={() => {addToCart(productData._id, size);toast.success("cart added")}}
          >
            Add To Cart
            
          </button>
          

          <div className="h-px w-full bg-slate-700 my-4"></div>

          <div className="space-y-1 text-sm text-white">
            <p>✅ 100% Original Product</p>
            <p>💵 Cash on Delivery Available</p>
            <p>🔁 Easy Return & Exchange within 7 Days</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-20 px-5 lg:px-20 space-y-6">
        <div className="flex gap-4">
          <button className="border px-5 py-3 text-white text-sm">Description</button>
          <button className="border px-5 py-3 text-white text-sm">Review (124)</button>
        </div>

        <div className="bg-[#3336397c] text-white p-5 rounded-md text-sm md:text-base lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eaque minima sunt in dolor, deserunt, vel qui cum, fuga veniam voluptatem!
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
