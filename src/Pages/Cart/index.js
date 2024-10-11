import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Quantilybox from "../../Components/Quantilybox";
import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material"
import { MdShoppingCartCheckout } from "react-icons/md";
import disfras1 from '../../assets/img/disfras2.png';

const Cart = () => {

    return(
        <>
            <section className="section cartPage">
                <div className="container">

                <h2 className="hd mb-1"> Tu Carro de Compras</h2>
                    <p>Tienes <b className="text-red"> 4</b>  productos en tu carrito</p>
                    <div className="row">
                        <div className="col-md-9 pr-5 ">
                    
                    <div className="table-responsive">
                        <table className="table ">
                        <thead>
                            <tr>
                                <th width="35%"> Producto</th>
                                <th width="15%"> Precio</th>
                                <th width="25%"> Cantidad</th>
                                <th width="15%"> Subtotal</th>
                                <th width="10%"> Eliminar</th>
                            </tr>
                            </thead>
                       
                        <tbody>
                            <tr>
                                <td width="35%">
                                <Link to="/product/1">
                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                        <div className="imgWrapper">
                                            <img  className="w-100" src={disfras1} alt="logo" />
                                        </div>

                                        <div className="info px-3">
                                            <h6>titulo del producto</h6>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                        </div>

                                       
                                    </div>
                                </Link>
                                </td>
                                <td width="15%">$ 15.99</td>
                                <td width="25%">
                                    <Quantilybox/>
                                </td>
                                <td width="15%">
                                    $ 15.99
                                </td>
                                <td width="10%"> <span className="remove"><IoClose /></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                <Link to="/product/1">
                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                    <div className="imgWrapper">
                                            <img  className="w-100" src={disfras1} alt="logo" />
                                        </div>

                                        <div className="info px-3">
                                            <h6>titulo del producto</h6>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                        </div>

                                       
                                    </div>
                                </Link>
                                </td>
                                <td width="15%">$ 15.99</td>
                                <td width="25%">
                                    <Quantilybox/>
                                </td>
                                <td width="15%">
                                    $ 15.99
                                </td>
                                <td width="10%"> <span className="remove"><IoClose /></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                <Link to="/product/1">
                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                    <div className="imgWrapper">
                                            <img  className="w-100" src={disfras1} alt="logo" />
                                        </div>

                                        <div className="info px-3">
                                            <h6>titulo del producto</h6>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                        </div>

                                       
                                    </div>
                                </Link>
                                </td>
                                <td width="15%">$ 15.99</td>
                                <td width="25%">
                                    <Quantilybox/>
                                </td>
                                <td width="15%">
                                    $ 15.99
                                </td>
                                <td width="10%"> <span className="remove"><IoClose /></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                <Link to="/product/1">
                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                    <div className="imgWrapper">
                                            <img  className="w-100" src={disfras1} alt="logo" />
                                        </div>
                                        <div className="info px-3">
                                            <h6>titulo del producto</h6>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                        </div>

                                       
                                    </div>
                                </Link>
                                </td>
                                <td width="15%">$ 15.99</td>
                                <td width="25%">
                                    <Quantilybox/>
                                </td>
                                <td width="15%">
                                    $ 15.99
                                </td>
                                <td width="10%"> <span className="remove"><IoClose /></span></td>
                            </tr>
                            <tr>
                                <td width="35%">
                                <Link to="/product/1">
                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                    <div className="imgWrapper">
                                            <img  className="w-100" src={disfras1} alt="logo" />
                                        </div>

                                        <div className="info px-3">
                                            <h6>titulo del producto</h6>
                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                        </div>

                                       
                                    </div>
                                </Link>
                                </td>
                                <td width="15%">$ 15.99</td>
                                <td width="25%">
                                    <Quantilybox/>
                                </td>
                                <td width="15%">
                                    $ 15.99
                                </td>
                                <td width="10%"> <span className="remove"><IoClose /></span></td>
                            </tr>

                        </tbody>
                        </table>
                    </div>
                    </div>

                        <div className="col-md-3">
                            <div className="card p-3  shadow cartDetails">
                                <h4> Total Compra</h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Sub-Total</span>
                                    <span className="ml-auto text-red font-weight-bold">$ 40.50</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Envio</span>
                                    <span className="ml-auto text-red">$ 15.00</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Pickup</span>
                                    <span className="ml-auto"><b>Gratis</b></span>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Total</span>
                                    <span className="ml-auto text-red font-weight-bold">$ 65.50</span>
                                </div>
                                
                                <br/>
                                <Button className="btn-blue btn-lg btn-big "> <MdShoppingCartCheckout /> Pagar</Button>
                            </div>


                        </div>
                    </div>
                

                </div>

            </section>
        </>
    )

}




export default Cart;