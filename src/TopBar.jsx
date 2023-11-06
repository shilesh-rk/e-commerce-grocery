import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./redux/Slice";

const TopBar = () => {
  const items = useSelector((state) => state.itemsInCart.cartItems);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(items);
  }, [items]);

  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <>
      <div className="md:bg-[#FFE475] p-4 flex justify-between items-center h-[102px]">
        <div className="brandText">E-Commerce</div>
        <div className="space-x-4">
          <button className="cartBtn" onClick={() => setDisplay(!display)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="font-semibold mt-[-0.5px] font-mono">
              {items.length || null}
            </span>
          </button>
        </div>
      </div>

      {display && (
        <div className="">
          <div className={`rounded-lg overflow-hidden modal-items right-[6px]`}>
            <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
              <h1 className="text-lg font-bold mr-5">Cart</h1>
              <span className="text-gray-600 font-['Mulish'] text-[16px] font-[600]">
                ({items.length ? `${items.length} item${items.length > 1 ? 's' : ''}` : "Your cart is empty"})
              </span>
              <span className="relative bottom-4 left-2 p-3 bg-red-400 font-extrabold rounded-md cursor-pointer shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16);]" onClick={closeModal}>&times;</span>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-4">
                {items.length > 0 && (
                  <div>
                    {items.map((addedItems, i) => (
                      <div key={i} className="flex items-center">
                        <img
                          className="h-16 object-contain rounded-lg mr-4"
                          src={addedItems.image}
                          alt="Product"
                        />
                        <div className="flex-1">
                          <h2 className="text-lg font-bold">{addedItems.name}</h2>
                          <span className="text-gray-600">{addedItems.price}</span>
                        </div>
                        <button
                          className="text-gray-600 hover:text-red-500 float-right"
                          onClick={() => dispatch(removeFromCart(addedItems))}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="15" viewBox="0 0 16 16">
                            <rect width="4" height="15" x="6" y=".5" fill="#fe3155" transform="rotate(45.001 8 8)"></rect>
                            <rect width="4" height="15" x="6" y=".5" fill="#fe3155" transform="rotate(134.999 8 8)"></rect>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="px-4 py-3 bg-gray-200">
                <div className="flex justify-between items-center">
                  {/* Have to add total calculation here */}
                  {/* <span class="font-bold text-lg">Total:</span>
                  <span class="font-bold text-lg">${0}</span> */}
                </div>
                <button
                  className="block w-full hover:bg-[#0b9a50] bg-[#2bc374] text-white font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
