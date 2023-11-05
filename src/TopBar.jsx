import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TopBar = () => {
	const items = useSelector((state) => state.itemsInCart.cartItems);
	const [display, setDisplay] = useState(false);
	console.log(items);

	useEffect(() => {
		console.log(items.cartItems);
	}, [items]);
	return (
		<>
			<div className='md:bg-[#FFE475] p-4 flex justify-between items-center h-[102px]'>
				<div className=' brandText'>E-Commerce</div>
				<div className='space-x-4'>
					<button className=' cartBtn' onClick={() => setDisplay(!display)}>
						<i className='fa-solid fa-cart-shopping'></i>
						<span className='font-semibold mt-[-0.5px] font-mono'>
							{items ? items.length : null}
						</span>
					</button>
				</div>
			</div>

			<div
				className={`p-4 max-w-xl mx-auto mt-16 absolute ${
					display ? "show-page" : "hidden-page"
				}`}>
				<div className='bg-white shadow-lg rounded-lg overflow-hidden'>
					<div className='flex items-center justify-between px-4 py-3 bg-gray-200'>
						<h1 class='text-lg font-bold mr-5'>Food Cart</h1>
						<span class='text-gray-600'>
							({items.length ? `${items.length} item's` : "You'r cart is empty"}{" "}
							)
						</span>
					</div>
					<div class='p-4'>
						<div class='flex items-center mb-4'>
							{items.length > 0 && (
								<div>
									{items.map((addedItems, i) => (
										<>
											<img
												class='h-16  object-contain rounded-lg mr-4'
												src={addedItems.image}
												alt='Product'
											/>
											<div class='flex-1'>
												<h2 class='text-lg font-bold'>{addedItems.name}</h2>
												<span class='text-gray-600'>{addedItems.price}</span>
											</div>
											<button class='text-gray-600 hover:text-red-500'>
												<svg class='h-6 w-6 fill-current' viewBox='0 0 24 24'>
													<path d='M19 13H5v-2h14v2z' />
												</svg>
											</button>
										</>
									))}
								</div>
							)}
						</div>
                        <div className="px-4 py-3 bg-gray-200">
                            <div className="flex justify-between items-center">
                            <span class="font-bold text-lg">Total:</span>
                <span class="font-bold text-lg">$74.97</span>
                            </div>

                <button className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => setDisplay(false)}>Proceed</button>
                        </div>
					</div>
				</div>
			</div>
            
		</>
	);
};

export default TopBar;
