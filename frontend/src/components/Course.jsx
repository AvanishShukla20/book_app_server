import React from 'react'
import Data from '../../public/data.json'
import Cards from './Cards'
import { Link } from 'react-router-dom';
const Course = () => {
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            WelCome Back To This{" "}
            <span className="text-yellow-400">Digital Library</span>
          </h1>
          <p className="mt-12">
            FaqirChand's Library offers a curated collection of the most intuitive and thought-provoking reads, featuring top picks by seasoned readers.
             From timeless classics to modern bestsellers, the library includes both free and paid options, catering to all literary tastes.
              Whether you're seeking deep insights, inspiration, or entertainment, FaqirChand's selection promises a rich reading experience
          </p>

          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
              Data.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
          }
        </div>
          <Link to="/">
            <button className="mt-6 mb-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-green-400 duration-300">
              Back
            </button>
          </Link>

      </div>
    </>
  )
}

export default Course
