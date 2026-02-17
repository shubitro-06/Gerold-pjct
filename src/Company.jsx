import React from 'react'
import suma from '../src/assets/suma.png'
import echo from '../src/assets/echo.png'
import nes from '../src/assets/nes.png'
import one from '../src/assets/one.png'
import vml from '../src/assets/vml.png'
import zillow from '../src/assets/zillow.png'
import ideo from '../src/assets/ideo.png'
import Group4 from '../src/assets/Group4.png'
import Group5 from '../src/assets/Group5.png'
import Group6 from '../src/assets/Group6.png'
import Group7 from '../src/assets/Group7.png'
import tool1 from '../src/assets/tool1.png'
import tool2 from '../src/assets/tool2.png'
import tool3 from '../src/assets/tool3.png'
import tool4 from '../src/assets/tool4.png'
// import ideo from '../src/assets/ideo.png'
import SecHead from './components/SecHead'
import Button from './components/Button'
import Card from './components/Card'

const Company = () => {
    return (
        <>
            <div className='mt-21 '>
                <h1 className='font-semibold text-center mb-15'> <span className='text-primary'>100+</span> Trusted Clients Over the world</h1>
                <div className='flex'>
                    <img src={suma} alt="" />
                    <img src={echo} alt="" />
                    <img src={nes} alt="" />
                    <img src={one} alt="" />
                    <img src={vml} alt="" />
                    <img src={zillow} alt="" />
                    <img src={ideo} alt="" />
                    <img src={suma} alt="" />
                    <img src={echo} alt="" />
                    <img src={nes} alt="" />
                    <img src={one} alt="" />
                </div>

                <div className="container">
                    <div className='flex items-end'>
                        <SecHead classname="mt-25"
                            head="My Recent Work"
                            para="MY Mastering Video Editing Skills"
                        />
                        <Button>Learn More</Button>
                    </div>
                    <div className='flex justify-between mb-25'>

                        <Card
                            img={tool1}
                            head="Adobe After Effect"
                            para="Adobe After Effects is a powerful software application used motion graphics."
                            par={Group4}
                        />
                        <Card
                            img={tool2}
                            head="Adobe After Effect"
                            para="Adobe After Effects is a powerful software application used motion graphics."
                            par={Group5}
                        />
                        <Card
                            img={tool3}
                            head="Adobe After Effect"
                            para="Adobe After Effects is a powerful software application used motion graphics."
                            par={Group6}
                        />
                        <Card
                            img={tool4}
                            head="Adobe After Effect"
                            para="Adobe After Effects is a powerful software application used motion graphics."
                            par={Group7}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company
