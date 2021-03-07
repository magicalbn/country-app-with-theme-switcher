import React, { useState } from 'react';
import { useTheme } from 'next-themes'
import Head from 'next/head'

import Toolbar from './Toolbar'




const Layout = (props) => {

    const {theme, setTheme} = useTheme()
    const { title } = props;

  
    
    const changetheme = () => {
        if (theme == "light") {
            setTheme("dark")
        } else setTheme("light")
    }

    
    return (
        
            <div className="layout" >
                
                <Head>

                    {title && <title>{title}</title>}
                    <link  rel="icon" href="static/svg/globe.svg"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />

                </Head>
                <Toolbar changetheme={changetheme} theme={theme} />
                {props.children}


            </div>
        

    )
}

export default Layout;