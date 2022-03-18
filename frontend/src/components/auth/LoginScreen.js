import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../actions/auth';
import './Login.css';
    
    export const LoginScreen = () => {

       const dispatch = useDispatch ();

       const [formLoginValues, handleLoginInputChange] = useForm ({
           LEmail: 'veronica@gmail.com',
           LPassword: '123456'
       });
        
        const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
            RName: 'nando',
            REmail: 'nando@gmail.com',
            RPassword1: '123456',
            RPassword2: '123456'
        } );

        const {RName, REmail, RPassword1, RPassword2} = formRegisterValues;

        const {LEmail, LPassword} = formLoginValues;

        const handleLogin = (e)=> {
            e.preventDefault();
            dispatch (startLogin (LEmail, LPassword));
        }

        const handleRegister = (e)=> {
            e.preventDefault();

            if(RPassword1 !== RPassword2){
                return Swal.fire ('Error', 'Las contrasenas deben de ser iguales', 'error');
            }
            dispatch ( startRegister (REmail, RPassword1, RName));
        }


        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name= 'LEmail'
                                    value= {LEmail}
                                    onChange= {handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name= 'LPassword'
                                    value= {LPassword}
                                    onChange= {handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                />
                            </div>
                        </form>
                    </div>
    
                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name='RName'
                                    value={RName}
                                    onChange= {handleRegisterInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name= 'REmail'
                                    value= {REmail}
                                    onChange= {handleRegisterInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña" 
                                    name= 'RPassword1'
                                    value= {RPassword1}
                                    onChange= {handleRegisterInputChange}
                                />
                            </div>
    
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña" 
                                    name= 'RPassword2'
                                    value= {RPassword2}
                                    onChange= {handleRegisterInputChange}
                                />
                            </div>
    
                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
  
