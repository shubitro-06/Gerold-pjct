import React from 'react'
import logo from '../src/assets/logo.png'
import facebk from '../src/assets/fb.png'
import In from '../src/assets/in.png'
import git from '../src/assets/git.png'
import ball from '../src/assets/ball.png'
import Button from './components/Button'

const NavBar = () => {
  return (
    <>
      <nav className='bg-[#000] h-[96px] w-full px-12 pt-5'>
        <div className='flex items-center justify-between'>
            <img src={logo} alt="" />

            <div>
                <ul className='text-[#ffffff67] flex items-center justify-between gap-8.75 '>
                    <li>Services </li>
                    <li> Works</li>
                    <li>Resume </li>
                    <li> Skills</li>
                    <li> Testimonials</li>
                    <li>Contact </li>
                </ul>
            </div>

            <div className='flex gap-2.5 cursor-pointer'>
                <img src={facebk} alt="" />
                <img src={In} alt="" />
                <img src={git} alt="" />
                <img src={ball} alt="" />
            </div>
            <Button>Lets Talk</Button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
