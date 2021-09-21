import axios from 'axios';
import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
 
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';

const Login = (props) => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    let input = {email, password}
    const login = (e) => {
        setLoading(true)
        e.preventDefault();
        if(email == "" || password == ""){
            toast.error("Email or Password Cannot Empty")
            setLoading(false)
            return;
        }
        axios.post('https://reqres.in/api/login', input)
        .then(res => {
            console.log(res)
            if(res){
                localStorage.setItem('Token', JSON.stringify(res.data.token))
                history.push('/dashboard')
                setLoading(false)
            }
           
            console.log(res.data.token, "Token")
            
        })
        .catch((err) => {
            console.log(err)
            toast.error("Email or Password is not Valid")
            setLoading(false)
            // alert("Wrong Email or Password")
        });
        
    };
    return (
        <>
            
        <div className="containers">
            <div className="card">
                {/* {loading?<p>Loading....</p>:''} */}
            <Form onSubmit={login}>
            <h1 className="text-center">Login Now</h1>
                <FormGroup>
                    <Label for="exampleEmail">Enter Email</Label>
                    <Input type="text" className="form-control mb-4" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Enter Password</Label>
                    <Input type="password" className="form-control " 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                {
                    loading?<button class="btn btn-success mt-4" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                  </button>
                  : <button className="btn btn-success mt-4">Login</button>
                }
                
            </Form>

            </div>
        </div>
        <ToastContainer/>
    </>
    );
};

export default Login;
