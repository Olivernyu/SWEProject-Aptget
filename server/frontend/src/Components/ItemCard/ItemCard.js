import React from 'react'

const ItemCard = (props) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        {
          props.image ?
          <img className="object-cover w-full h-56 rounded-t-lg" src={props.image} alt="item" />
          :
          <img className="object-cover w-full h-56 rounded-t-lg" src={`https://picsum.photos/200/300.jpg`} alt="item" />
        }
      </div>
      <div className="px-5 pb-5 pt-2">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.itemName}</h5>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{props.price}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Seller</button>
        </div>
      </div>
    </div>

  )
}

export default ItemCard


