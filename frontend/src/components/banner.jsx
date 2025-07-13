import React from 'react'
import bannerimg from '../assets/BannerPhoto.png'
const Banner = () => {
  return (
    <>
    <div className = "max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>
            <span className='text-yellow-400'>Change Your Life</span> By faQirChand's Exclusive Book Collection !
            </h1>
            <p className='text-xl'>
                Welcome to our timeless bookstore, <span className='text-orange-500'>established in 1930 in the heart of Varanasi by Pt. Kishor Bihari Lal.</span>
                <br />
                We offer a rich and diverse collection—from soul-stirring motivational reads and thrilling suspense stories to heartfelt love tales and vintage classics.
                <br />
                <span className='text-yellow-400'>We've Got Everything you Need!</span>
            </p>

             <label className="input validator w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<button className="btn btn-dash btn-warning">Explore</button>
<div className="validator-hint hidden">Enter valid email address</div>
        </div>
        </div>
        <div className="w-full order-1 md:w-1/2">
        <img src={bannerimg} className='w-92 h-50  md:w-160 h-180 ' alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner;
