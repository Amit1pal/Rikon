import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser,HiOutlineShoppingBag,HiBars3BottomRight} from "react-icons/hi2"
import Searchbar from './Searchbar'
import { CartDrawer } from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen]=useState(false);
    const [navDrawerOpen,setNavDrawerOpen]=useState(false);
    
    const toggleNavDrawer=()=>{
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toglleCartDrawer=()=>{
        setDrawerOpen(!drawerOpen);
    }
    
  return (
   <>
   <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div>
            <Link to ='/' className='text-2xl font-medium'>Rikon</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Men</Link> 
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Women</Link> 
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Topwear</Link>
            <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Bottomwear</Link>      
         </div>
        
        {/* icons */}
        <div className='flex items-center space-x-6'>
            <Link to='/profile' className='hover:text-black'>
                <HiOutlineUser className='h-6 w-6 text-gray-700'/>
            </Link>
            <button className='relative hover:text-black' onClick={toglleCartDrawer}>
                <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/><span className='absolute -top-1 bg-rikon-color text-white text-xs rounded-full px-2 py-0.5'>4</span>
            </button>
            <div className='overflow-hidden'>
                <Searchbar/>
            </div>
            <button onClick={toggleNavDrawer} className='md:hidden'>
                <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
            </button>
        </div>
   </nav>
   <CartDrawer drawerOpen={drawerOpen} toglleCartDrawer={toglleCartDrawer} />
   {/* Mobile Navigation */}
   <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:2-1/3 h-full bg-white shadow-lg trasform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0": "-translate-x-full"}`}>
        <div className='flex justify-end p-4'>
            <button onClick={toggleNavDrawer}>
                <IoMdClose className='h-6 w-6 text-gray-600' />
            </button>
        </div>
        <div className='p-4'>
            <h2 className='text-xl font-semibold mb-4'></h2>
            <nav className='space-y-4'>
                <Link to= "#" onClickCapture={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Men</Link>
                <Link to= "#" onClickCapture={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Women</Link>
                <Link to= "#" onClickCapture={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Topwear</Link>
                <Link to= "#" onClickCapture={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Bottomwear</Link>
            </nav>
        </div>
   </div>
   </>
  )
}

export default Navbar