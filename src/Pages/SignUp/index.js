import { useContext, useEffect } from "react";

import { MyContext } from "../../App";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Logo from "../../assets/img/logo yrenestar.png";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/img/Google.png";

const SignUp = () => { 

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
      }, );

    return(
        <section className="section signInPage fondoLogin signUpPage">
        <div className="container signInContainer">
        
            

        </div>
           
            <div className="container">
                    <div className="box card p-1 shadow border-1">
                        <div className="text-center">
                            <img src={Logo} alt="yrenestar" />
                        </div>

                        

                        <form className="mt-2">
                        <h2 className="mb-3">Registro</h2>

                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <TextField  label="Nombre Completo" type="Text" required variant="standard" className="w-100" />
                                </div>

                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <TextField  label="Numero Telefonico" type="Text" required variant="standard" className="w-100" />
                                </div>
                                
                                </div>

                            </div>

                            <div className="form-group">
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                            </div>
                            <div className="form-group">
                            <TextField id="standard-basic" label="Contraseña" type="password" required variant="standard" className="w-100" />
                            </div>

                            <a className="border-effect cursor txt"> Olvidaste Tu Contraseña</a>

                            <div className="d-flex align-items-center mt-3 mb-3 ">
                            <div className="row w-100">   
                                <div className="col-md-6">
                                    <Button className="btn-blue w-100 btn-lg btn-big  "> Ingresar</Button>
                                </div>

                                <div className="col-md-6 pr-0">
                                    <Link to="/" className="d-block w-100" > <Button className="btn-lg btn-big w-100 " variant="outlined" onClick={()=> context.setisHeaderFooterShow(true)}> Cancelar</Button> </Link>
                                </div>


                            </div>
                            

                            

                            </div>

                            <p className="txt">Ya estas Registrado? <Link to="/signIn" className="border-effect"> Ingresa Aqui</Link></p>

                            <h6 className="mt-4 text-center font-weight-bold ">O Ingresa Con Tu Red social</h6>

                            <Button className="loginWithGoogle mt-2 ml-5  " ><img src={GoogleImg} className="w-100" alt="yrenestar"  /> </Button>
                                
                         

                        </form>

                    </div>

            </div>

        </section>
    )
 }

export default SignUp;