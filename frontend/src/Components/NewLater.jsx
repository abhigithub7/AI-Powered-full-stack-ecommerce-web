import React from 'react';

function NewLater() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form logic here (e.g., API call)
  };

  return (
    <div className="w-full min-h-[30vh] md:min-h-[40vh] bg-gradient-to-l from-[#000000] to-[#000000] flex flex-col items-center justify-center gap-4 py-6 px-4">
      
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#a5faf7] font-semibold text-center">
        Subscribe now & get 20% off
      </p>

      <p className="text-sm sm:text-base md:text-lg text-blue-100 font-semibold text-center max-w-[700px]">
        Subscribe now and enjoy exclusive savings, special deals, and early access to new collections
      </p>

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-[700px] flex flex-col sm:flex-row p-12 md:p-0  items-center justify-center gap-3 mt-4"
      >
        <input
          type="email"
          placeholder="Enter your Email"
          required
          className="placeholder:text-black bg-slate-300 w-full sm:flex-1 h-10 px-4 rounded-lg shadow-sm shadow-black"
        />
        <button
          type="submit"
          className="text-sm sm:text-base px-4 sm:px-6 py-2 bg-[#2e3030c9] text-white border border-[#80808049] rounded-lg shadow-sm shadow-black hover:bg-slate-500 transition"
        >
          Subscribe
        </button>
      </form>

    </div>
  );
}

export default NewLater;
