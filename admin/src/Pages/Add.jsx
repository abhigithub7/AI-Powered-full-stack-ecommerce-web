import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { authDATAContext } from "../Context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";

function Add() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setsubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false)

  const { serverUrl } = useContext(authDATAContext);

  const handleAddProduct = async (e) => {
    setLoading(true)
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller);

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const result = await axios.post(
        `${serverUrl}/api/product/addproduct`,
        formData,
        { withCredentials: true }
      );

      console.log(result.data);
      toast.success("Product Added Successfully")
       setLoading(false)

      if (result.data) {
        setName("");
        setDescription("");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setPrice("");
        setBestSeller(false);
        setCategory("Men");
        setsubCategory("Topwear");
        setSizes([]);
      }
    } catch (error) {
      console.error("Add Product Error:", error.response?.data || error.message);
      setLoading(false)
      toast.error("Product add failed")
    }
  };

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#131212] to-[#000000] text-white overflow-x-hidden relative">
      <Navbar />
      <Sidebar />
      <div className="w-[82%] min-h-[100%] flex items-start justify-start overflow-x-hidden absolute right-0 top-[70px]">
        <form
          className="w-full md:w-[90%] flex flex-col gap-6 py-10 px-6 md:px-12"
          onSubmit={handleAddProduct}
        >
          <div className="text-2xl md:text-4xl font-bold mb-4">Add Product</div>

          {/* Upload images */}
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Upload Images</p>
            <div className="flex gap-4 flex-wrap">
              {[image1, image2, image3, image4].map((img, idx) => (
                <label
                  key={idx}
                  className="w-16 h-16 md:w-24 md:h-24 cursor-pointer"
                >
                  <img
                    src={
                      img
                        ? URL.createObjectURL(img)
                        : "https://i.pinimg.com/474x/8c/ec/61/8cec61ae01809f2acaca4063010db177.jpg"
                    }
                    alt=""
                    className="w-full h-full object-cover rounded-lg border-2 hover:border-[#46d1f7]"
                  />
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (idx === 0) setImage1(file);
                      else if (idx === 1) setImage2(file);
                      else if (idx === 2) setImage3(file);
                      else if (idx === 3) setImage4(file);
                    }}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Product name */}
          <div>
            <p className="text-xl font-semibold">Product Name</p>
            <input
              type="text"
              className="w-full max-w-[600px] h-10 rounded-lg bg-slate-600 px-4 text-lg border-2 hover:border-[#46d1f1]"
              placeholder="Type here"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          {/* Product description */}
          <div>
            <p className="text-xl font-semibold">Product Description</p>
            <textarea
              className="w-full max-w-[600px] h-24 rounded-lg bg-slate-600 px-4 py-2 text-lg border-2 hover:border-[#46d1f1]"
              placeholder="Type here"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          {/* Category + Subcategory */}
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-xl font-semibold">Category</p>
              <select
                className="bg-slate-600 rounded-lg border-2 hover:border-[#46d1f1] px-2 py-1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <div>
              <p className="text-xl font-semibold">Sub-Category</p>
              <select
                className="bg-slate-600 rounded-lg border-2 hover:border-[#46d1f1] px-2 py-1"
                value={subCategory}
                onChange={(e) => setsubCategory(e.target.value)}
              >
                <option>Topwear</option>
                <option>Bottomwear</option>
                <option>Winterwear</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-xl font-semibold">Product Price</p>
            <input
              type="number"
              className="w-full max-w-[600px] h-10 rounded-lg bg-slate-600 px-4 text-lg border-2 hover:border-[#46d1f1]"
              placeholder="₹ 2000"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          {/* Sizes */}
          <div>
            <p className="text-xl font-semibold">Product Size</p>
            <div className="flex gap-3 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`px-4 py-1 rounded-lg bg-slate-600 border-2 cursor-pointer hover:border-[#46d1f1] ${
                    sizes.includes(size)
                      ? "bg-green-200 text-black border-[#46d1f7]"
                      : ""
                  }`}
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((s) => s !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Bestseller */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={bestSeller}
              className="w-5 h-5 cursor-pointer"
              onChange={() => setBestSeller((prev) => !prev)}
            />
            <label className="text-lg font-semibold">Add to bestSeller</label>
          </div>

          <button
            type="submit"
            className="w-36 py-3 rounded-xl bg-[#65d8f7] hover:bg-[#4dbfd7] active:bg-slate-700 text-black font-bold border-2 border-white"
          >
          {loading ? <Loading/> :"Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
