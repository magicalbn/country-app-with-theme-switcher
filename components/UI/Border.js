import React from 'react';
import Router from 'next//router'

const Border = (props) =>{

    const {code,name} = props;

    return (
        <p className="border-name" onClick={()=>Router.push({pathname:'/country',query:{code:code}})}>{name}</p>
    )
}

export default Border;