import React from "react";

function ProductCard({ title = "Workshop", date = "12/07/2024", img }) {
  return (
    <>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white border-gray-200 border-2 shadow-slate-100 shadow-lg hover:scale-[1.02] hover:-translate-y-2 ease-in-out delay-250 duration-300">
        <a
          className="relative flex overflow-hidden rounded-t-md"
          href="#"
        >
          <img
            className="object-fill self-center"
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product image"
          />
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight font-bold text-slate-900">{title}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-2xl text-slate-900">{date}</span>
              {/* <span class="text-sm text-slate-900 line-through">₹6990</span> */}
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 justify-center rounded-md bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            More Details
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
