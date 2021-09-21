import React from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router'

function Protected(props) {

    let history = useHistory();

    useEffect(() => {
       if(!localStorage.getItem('Token')){
           history.push('/login')
       }
    }, [])
    let Cmp = props.Cmp
    return (
        <div>
            <Cmp/>
        </div>
    )
}
export default Protected
