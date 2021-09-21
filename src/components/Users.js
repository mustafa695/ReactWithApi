import axios from "axios";
import React, { useState } from "react"
import { useEffect } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

function Users(){

    const [value, setValue] = useState([])
    const [support, setSupport] = useState([])
    const [loading, setLoading] = useState(false)

    
    let {id} = useParams();
    useEffect(() => {
      setLoading(true)
       axios.get(`https://reqres.in/api/users/${id}`)
       .then((res) => {
           setValue([res?.data.data])
           setSupport([res.data.support])
           setLoading(false)
       })
       .catch((err) => {
           console.log(err)
       })
    }, [])
    return(
        <>
        <div className="container">
            {
                loading?<div class="spinner-border text-secondary"></div>:''
            }
            <h1 className="text-center my-4">Users, {id}</h1>
                {value.map((item) => {
                    return(
                        <>
                        <div className="text-center">
                            <img src={item.avatar} className="avatar" alt={item.avatar}/>
                           
                            <h3 className="mt-4 mb-3">{item.first_name} {item.last_name}</h3>
                            
                            <h5 className="mb-4">{item.email}</h5>
                             
                        </div>       
                        </>
                    )
                })}

                {support.map((values) => {
                    return(
                        <>
                        <p className="text-center para mb-4">{values.text}</p>
                        <div className="text-center">
                            
                            <a href={values.support} className="support text-center ">SUPPORT ME</a>
                            
                        
                        </div>
                        </>
                    )
                })}
        </div>
       </>
    )
}

export default Users