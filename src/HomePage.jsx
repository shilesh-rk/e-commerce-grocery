import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/Slice";

const listOfItems = [
	{name:"Produce",altName:"Produce",pic:`./assets/items images/menu items/fa-solid_carrot.png`,},
	{name:"Prepared foods",altName:"Sweets",pic:`./assets/items images/menu items/mdi_chocolate.png`,},
	{name:"Canned foods & Soups",altName:"Canned",pic:`./assets/items images/menu items/game-icons_canned-fish.png`,},
	{name:"Produce",altName:"Produce",pic:`./assets/items images/menu items/fa-solid_carrot.png`,},
	{name:"Bakery",altName:"Bakery",pic:`./assets/items images/menu items/material-symbols_cake-rounded.png`,},
	{name:"Diary & Eggs",altName:"Dairy",pic:`./assets/items images/menu items/jam_eggs-f.png`,},
	{name:"Frozen",altName:"Frozen",pic:`./assets/items images/menu items/ion_fast-food.png`,},
	{name:"Meat & Seafood",altName:"Meat",pic:`./assets/items images/menu items/meat.png`,},
	{name:"Diary & Eggs",altName:"Dairy",pic:`./assets/items images/menu items/jam_eggs-f.png`,},
	{name:"Produce",altName:"Produce",pic:`./assets/items images/menu items/fa-solid_carrot.png`,},
	{name:"Prepared foods",altName:"Sweets",pic:`./assets/items images/menu items/mdi_chocolate.png`,},
	{name:"Canned foods & Soups",altName:"Canned",pic:`./assets/items images/menu items/game-icons_canned-fish.png`,},
	{name:"Produce",altName:"Produce",pic:`./assets/items images/menu items/fa-solid_carrot.png`,},
	{name:"Bakery",altName:"Bakery",pic:`./assets/items images/menu items/material-symbols_cake-rounded.png`,},
	{name:"Diary & Eggs",altName:"Dairy",pic:`./assets/items images/menu items/jam_eggs-f.png`,},
	{name:"Frozen",altName:"Frozen",pic:`./assets/items images/menu items/ion_fast-food.png`,},
	{name:"Meat & Seafood",altName:"Meat",pic:`./assets/items images/menu items/meat.png`,},
	{name:"Diary & Eggs",altName:"Dairy",pic:`./assets/items images/menu items/jam_eggs-f.png`,},
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
		image: `./assets/items images/banana.jpg`,
		price: `$${0.69}`,
		name: "Banana 1ct",
		vitamins: "18 oz",
		quantity:1,
	},
	{
		id:2,
		image: `./assets/items images/strawberries.png`,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: `./assets/items images/yogurt.png`,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:4,
		image: `./assets/items images/blackberries.png`,
		price: `$${0.69}`,
		name: "Blackberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:2,
		image: `./assets/items images/strawberries.png`,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: `./assets/items images/yogurt.png`,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:1,
		image: `./assets/items images/banana.jpg`,
		price: `$${0.69}`,
		name: "Banana 1ct",
		vitamins: "18 oz",
		quantity:1,
	},
	{
		id:2,
		image: `./assets/items images/strawberries.png`,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: `./assets/items images/yogurt.png`,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:4,
		image: `./assets/items images/blackberries.png`,
		price: `$${0.69}`,
		name: "Blackberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:2,
		image: `./assets/items images/strawberries.png`,
		price: `$${0.69}`,
		originalPrice: `$${0.69}`,
		name: "Strawberries",
		vitamins: "1 lb",
		quantity:1,
	},
	{
		id:3,
		image: `./assets/items images/yogurt.png`,
		width: "90px",
		price: `$${0.69}`,
		name: "Yogurt",
		vitamins: "1 lb",
		quantity:1,
	},
];
const HomePage = () => {
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
						{productId.includes(product.id) ? (
						  <img
							src='./assets/items images/Remove icon item.svg'
							alt=''
							className='addCart'
						  />
						) : (
						  <img
							src='./assets/items images/Add icon item.svg'
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
