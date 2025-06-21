import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6 px-4">
        <ul className="footer_categories flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base mb-4">
          <li><Link to={'/posts/categories/Agriculture'} className="hover:underline">Agriculture</Link></li>
          <li><Link to={'/posts/categories/Business'} className="hover:underline">Business</Link></li>
          <li><Link to={'/posts/categories/Education'} className="hover:underline">Education</Link></li>
          <li><Link to={'/posts/categories/Entertainment'} className="hover:underline">Entertainment</Link></li>
          <li><Link to={'/posts/categories/Art'} className="hover:underline">Art</Link></li>
          <li><Link to={'/posts/categories/Investment'} className="hover:underline">Investment</Link></li>
          <li><Link to={'/posts/categories/Uncategorized'} className="hover:underline">Uncategorized</Link></li>
          <li><Link to={'/posts/categories/Weather'} className="hover:underline">Weather</Link></li>
          <li><Link to={'/posts/categories/Food'} className="hover:underline">Food</Link></li>
        </ul>

        <div className="footer_copyright text-center text-xs md:text-sm text-gray-400">
          <small>All Rights Reserved &copy; Copyright, Vaibhav Kumawat</small>
        </div>
      </footer>
    </>
  )
}

export default Footer