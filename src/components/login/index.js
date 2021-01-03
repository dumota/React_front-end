import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import './style.css'
import api from '../../services/api';

function Login() {
    const history = useHistory();

    //todo estado no react é imutavel , não muda
    const [usuario,setUsuario] = useState({});


    function handleChange(e){
        
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        api.post('/session',usuario).then(res =>{
            //history.push('/')
            console.log(res.data)
        })
    }

 //rest operation
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <div>
                    <span>Username</span>
                    <input type="text"  name="username" onChange={handleChange}/>
                </div>
                <div className="row">
                    <span>Password</span>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                

                <div className="row">
                    <button>Logar</button>
                </div>

            </form>
        </div>
    )
}
export default Login;