import React, { useState, useCallback } from 'react';
import { useTheme } from 'next-themes'
import Head from 'next/head'

import Toolbar from './Toolbar'




const Layout = (props) => {

    const { theme, setTheme } = useTheme()
    const { title } = props;



    const changetheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark")
        } else setTheme("light")
    }, [theme])


    return (

        <div className="layout" >
            <Head>

                {title && <title>{title}</title>}
            </Head>

            <Toolbar changetheme={changetheme} theme={theme} />
            {props.children}


        </div>


    )
}

export default Layout;