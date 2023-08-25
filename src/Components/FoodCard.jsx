import React from 'react';

const FoodCard = ({ item }) => {
   const { name, image, price, recipe } = item;
   return (
      <div className='card w-96 bg-base-100 shadow-xl'>
         <figure className=' p-2'>
            <img src={image} alt='Shoes' className='rounded-xl' />
         </figure>
         <p className='bg-slate-300 text-black absolute right-0 mx-2 font-bold  my-2 rounded p-[4px]'>
            ${price}/-
         </p>
         <div className='card-body items-center text-center'>
            <h2 className='card-title'>{name}</h2>
            <p>{recipe}</p>
            <div className='card-actions'>
               <button className=' order-slate-600 border-xs border-b-4 mt-8 text-black btn btn-outline'>
                  Order Now
               </button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;
