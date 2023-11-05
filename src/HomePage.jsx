import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/Slice";
import { BANANA,STRAWBERRIES,BLACKBERRIES,YOGURT } from "./assets";
import { CARROT,FISH,CHOCOLATE,EGGS,MEAT,PREPARED,CAKE } from './assets';
import { ADD_ICON,REMOVE_ICON } from './assets';

const listOfItems = [
	{name:"Produce",altName:"Produce",pic:CARROT,},
	{name:"Prepared foods",altName:"Sweets",pic:CHOCOLATE,},
	{name:"Canned foods & Soups",altName:"Canned",pic:FISH,},
	{name:"Produce",altName:"Produce",pic:CARROT,},
	{name:"Bakery",altName:"Bakery",pic:CAKE,},
	{name:"Diary & Eggs",altName:"Dairy",pic:EGGS,},
	{name:"Frozen",altName:"Frozen",pic:PREPARED,},
	{name:"Meat & Seafood",altName:"Meat",pic:MEAT,},
	{name:"Diary & Eggs",altName:"Dairy",pic:EGGS,},
	{name:"Produce",altName:"Produce",pic:CARROT,},
	{name:"Prepared foods",altName:"Sweets",pic:CHOCOLATE,},
	{name:"Canned foods & Soups",altName:"Canned",pic:FISH,},
	{name:"Produce",altName:"Produce",pic:CARROT,},
	{name:"Bakery",altName:"Bakery",pic:CAKE,},
	{name:"Diary & Eggs",altName:"Dairy",pic:EGGS,},
	{name:"Frozen",altName:"Frozen",pic:PREPARED,},
	{name:"Meat & Seafood",altName:"Meat",pic:MEAT,},
	{name:"Diary & Eggs",altName:"Dairy",pic:EGGS,},
];

const menuList = [
	{name:"Produce",altName:"Produce",},
	{name:"Prepared foods",altName:"Sweets",},
	{name:"Canned foods & Soups",altName:"Canned",},
	{name:"Bakery",altName:"Bakery",},
	{name:"Diary & Eggs",altName:"Dairy",},
	{name:"Frozen",altName:"Frozen",},
	{name:"Meat & Seafood",altName:"Meat",},
];

const productDetails = [
	{
		id:1,
		image: BANANA,
		price: `$${0.69}`,
		name: "Banana 1ct",
		vitamins: "18 oz",
		quantity:1,
	},
	{
		id:2,
		image: STRAWBERRIES,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: YOGURT,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:4,
		image: BLACKBERRIES,
		price: `$${0.69}`,
		name: "Blackberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:2,
		image: STRAWBERRIES,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: YOGURT,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:1,
		image: BANANA,
		price: `$${0.69}`,
		name: "Banana 1ct",
		vitamins: "18 oz",
		quantity:1,
	},
	{
		id:2,
		image: STRAWBERRIES,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: YOGURT,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:4,
		image: BLACKBERRIES,
		price: `$${0.69}`,
		name: "Blackberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:2,
		image: STRAWBERRIES,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: YOGURT,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
];
const HomePage = () => {
	const storeItems = useSelector((state) => state.itemsInCart.cartItems);

	const [productId, setProductId] = useState([]);
	const dispatch = useDispatch();
  
	const toggleProduct = (product) => {
	  if (productId.includes(product.id)) {
		const updatedProductId = productId.filter((id) => id !== product.id);
		setProductId(updatedProductId);
		dispatch(removeFromCart(product)); 
	  } else {
		
		setProductId([...productId, product.id]);
		dispatch(addToCart(product)); 
	  }
	};
  
	return (
	  <div className='md:flex'>
		<div className='sideBar'>
		  <ul className="sideUl">
			{listOfItems.map((item, i) => (
			  <li key={i} className="">
				<a href={`#${item.name}`} className='top-list'><img src={item.pic} alt={item.name} /></a>
				<a href={`#${item.name}`} className='sideList max-md:hidden'>{item.name}</a>
				<a href={`#${item.name}`} className='sideList md:hidden'>{item.altName}</a>
			  </li>
			))}
		  </ul>
		  <hr className="md:hidden"/>
		</div>
		<div className='overflow-x-hidden menuBar'>
		  {menuList.map((category, i) => (
			<div className='sections' key={i} id={category.name}>
			  <h1 className='category-title max-md:hidden'>
				{category.name} <i className='fa-solid fa-chevron-right'></i>
			  </h1>
			  <h1 className='category-title md:hidden'>
				{category.altName} <i className='fa-solid fa-chevron-right'></i>
			  </h1>
			  <div className='flex'>
				<div className='category-section overflow-x-auto'>
				  {productDetails.map((product, i) => (
					<div key={i} className='item-container'>
					  <img
						src={product.image}
						alt={product.name}
						className='productImg'
						style={{ width: `${product.width}` }}
					  />
					  <button onClick={() => toggleProduct(product)}>
						{productId.includes(product.id)  && (storeItems.includes(product))?(
						  <img
							src={REMOVE_ICON}
							alt=''
							className='addCart'
						  />
						) : (
						  <img
							src={ADD_ICON}
							alt=''
							className='addCart'
						  />
						)}
					  </button>
					  <h1 className='productPrice'>
						{product.originalPrice ? (
						  <span className='originalPrice'>{product.originalPrice}</span>
						) : null}
						{product.price}
					  </h1>
					  <h1 className='productName'>{product.name}</h1>
					  <h1 className='productVit'>{product.vitamins}</h1>
					</div>
				  ))}
				</div>
			  </div>
				<hr className="max-md:hidden"/>
			</div>
			
		  ))}
		</div>
	  </div>
	);
  };
  

export default HomePage;
