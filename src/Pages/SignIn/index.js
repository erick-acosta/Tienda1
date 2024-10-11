import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from "../../assets/img/logo yrenestar.png";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/img/Google.png";

const SignIn = () => { 

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
      }, );

    return(
        <section className="section signInPage fondoLogin">
        <div className="container signInContainer">
            

        </div>
           
            <div className="container">
                    <div className="box card p-1 shadow border-1">
                        <div className="text-center">
                            <img src={Logo} alt="yrenestar"   />
                        </div>

                        

                        <form className="mt-3">
                        <h5 className="mb-4">Ingresar</h5>
                            <div className="form-group">
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                            </div>
                            <div className="form-group">
                            <TextField id="standard-basic" label="Contraseña" type="password" required variant="standard" className="w-100" />
                            </div>

                            <a className="border-effect cursor txt"> Olvidaste Tu Contraseña</a>

                            <div className="d-flex align-items-center mt-3 mb-3 ">
                            <Button className="btn-blue col btn-lg btn-big  "> Ingresar</Button>
                            <Link to="/"> <Button className="btn-lg btn-big col ml-3 " variant="outlined" onClick={()=> context.setisHeaderFooterShow(true)}> Cancelar</Button> </Link>

                            </div>

                            <p className="txt">No estas Registrado? <Link to="/signUp" className="border-effect"> Ingresa Aqui</Link></p>

                            <h6 className="mt-4 text-center font-weight-bold ">O Ingresa Con Tu Red social</h6>

                                <Button className="loginWithGoogle mt-2 ml-5  " ><img src={GoogleImg} className="w-100" alt="yrenestar"  /> </Button>
                                
                         

                        </form>

                    </div>

            </div>

        </section>
    )
 }

export default SignIn;