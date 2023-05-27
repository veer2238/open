import React, { useState } from 'react'
import './App.css'
import { AiOutlinePlus } from "react-icons/ai"

const App = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleBars = () => {
        setShow(!show)
        setShow1(false)
        setShow2(false)
        setShow3(false)
       
    }

    const handleBars1 = () => {
        setShow1(!show1)
        setShow(false)
        setShow2(false)
        setShow3(false)
      
    }

    const handleBars2 = () => {
        setShow2(!show2)
        setShow1(false)
        setShow(false)
        setShow3(false)
    }

    const handleBars3 = () => {
        setShow3(!show3)
        setShow2(false)
        setShow1(false)
        setShow(false)
    }
    return (
        <div className='main'>
            <div className='plus1'>

                <div className='image'>
                    <img src='img2.png' alt='' />
                </div>
                <div className='text'>FULL STACK</div>

                <div className='icon' onClick={handleBars}><AiOutlinePlus size={20} /></div>
                {show ?
                    <div className='material'>
                        <table>

                            <tr>
                                <td>Html</td>
                                <td>Css</td>
                                <td>javascript</td>
                                <td>react js</td>
                                <td>Node js</td>
                            </tr>
                        </table>
                    </div> : null
                }


            </div>


            <div className='plus1'>

                <div className='image'>
                    <img src='img2.png' alt='' />
                </div>
                <div className='text'>MERN STACK</div>

                <div className='icon' onClick={handleBars1}><AiOutlinePlus size={20} /></div>
                {show1 ?
                    <div className='material'>
                        <table>

                            <tr>
                                <td>Mongo Db</td>
                                <td>Expree Js</td>
                                <td>React JS</td>
                                <td>Node js</td>

                            </tr>
                        </table>
                    </div> : null
                }


            </div>


            <div className='plus1'>

                <div className='image'>
                    <img src='img2.png' alt='' />
                </div>
                <div className='text'>DATA ANALYSIS</div>

                <div className='icon' onClick={handleBars2}><AiOutlinePlus size={20} /></div>

                {show2 ?
                    <div className='material'>
                        <table>

                            <tr>
                                <td>Python</td>
                                <td>Exel</td>
                                <td>Advance Exel</td>
                                <td>Sql</td>
                                <td>Power Bi</td>
                            </tr>
                        </table>
                    </div> : null
                }


            </div>


            <div className='plus1'>

                <div className='image'>
                    <img src='img2.png' alt='' />
                </div>
                <div className='text'>Data Science</div>

                <div className='icon' onClick={handleBars3}><AiOutlinePlus size={20} /></div>

                {show3 ?
                    <div className='material'>
                        <table>

                            <tr>
                                <td>Python</td>
                                <td>Exel</td>
                                <td>Advance Exel</td>
                                <td>Sql</td>
                                <td>Power Bi</td>
                            </tr>
                        </table>
                    </div> : null
                }


            </div>
        </div>
    )
}

export default App