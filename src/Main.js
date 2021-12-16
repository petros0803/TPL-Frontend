import React from 'react'
import Authentication from './Components/Sidebar/Authentication/Authentication'
import Sidebar from './Components/Sidebar/Sidebar'

//scss
import "./main.scss"

const Main = () => {
    return (
        <div className='main--container'>
            <Sidebar />
            <Authentication/>
        </div>
    )
}

export default Main
