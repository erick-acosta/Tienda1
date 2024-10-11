import ProductZoom from "../../Components/ProductZoom"
import Rating from '@mui/material/Rating';
import Quantilybox from "../../Components/Quantilybox";
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";
import { Link } from "react-router-dom";


const ProductDetails = () => {

const [activeSize, setActiveSize] = useState(null);
const [activeTabs, setActiveTabs] = useState(0);
const isActive =(index => {
    setActiveSize(index);
})

    
        return (<>
            <section className="productDetails section">
                <div className="container">
                        <div className="row">

                            <div className="col-md-4 pl-5">

                                   <ProductZoom/> 

                            </div>

                            <div className="col-md-7 pl-5 pr-5">

                            <h2 className="hd text-capitalize">Titulo del producto</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2" >producto : </span>
                                        <span> clase</span>
                                    </div>
                                </li>

                                <li className="list-inline-item d-flex align-items-center ">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className="text-light ml-2 cursor" > 1 Valoracion</span>

                                    </div>
                                </li>

                                
                            </ul>

                                <div className="d-flex info mb-3">
                                    <span class="oldPrice"> $ 20.00</span>
                                    <span class="netPrice text-danger ml-2"> $ 15.00</span>
                                </div>


                                <span className="badge badge-success">En Stock</span>

                                <p className=" mt-2"> loren ipsum dolor sit amet, consectetur adipiscing elit. loren loren ipsum dolor sit amet, consectetur adipiscing elit. loren loren ipsum dolor sit amet, consectetur adipiscing elit. loren</p>

                                <div className=" productSize d-flex align-items-center">
                                    <span className=" mr-2" >Talla : </span>
                                        <ul className="list list-inline mb-0 pl-4">
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 0 ? 'active' : '' }`} onClick={() => isActive(0)}>2</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 1 ? 'active' : '' }`} onClick={() => isActive(1)}>4</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 2 ? 'active' : '' }`} onClick={() => isActive(2)}>6</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 3 ? 'active' : '' }`} onClick={() => isActive(3)}>8</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 4 ? 'active' : '' }`} onClick={() => isActive(4)}>10</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 5 ? 'active' : '' }`} onClick={() => isActive(5)}>12</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 6 ? 'active' : '' }`} onClick={() => isActive(6)}>14</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 7 ? 'active' : '' }`} onClick={() => isActive(7)}>16</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 8 ? 'active' : '' }`} onClick={() => isActive(8)}>S</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 9 ? 'active' : '' }`} onClick={() => isActive(9)}>M</a></li>
                                            <li className="list-inline-item"> <a className={`tag ${activeSize === 10 ? 'active' : '' }`} onClick={() => isActive(10)}>L</a></li>


                                            
                                            </ul>

                                </div>

                                <div className="d-flex align-items-center mt-3">
                                    <Quantilybox/>
                                    <Link to="/Cart"><Button className="btn-blue btn-lg btn-big btn-round"> <BsCartFill /> &nbsp; Agregar Al Carrito</Button></Link>

                                    <Tooltip title="Lista de Deseos" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"> <FaRegHeart /></Button>
                                    </Tooltip>

                                    <Tooltip title="Comparar" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2"> <MdOutlineCompareArrows /></Button>
                                    </Tooltip>

                                </div>


                            </div>


                        </div>


                        <br/>

                        <div className=" card mt-5 p-5 detailsPageTabs">
                            <div className="customTabs">
                                <ul className=" list list-inline">
                                    <li className="list-inline-item">
                                        <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs (0)}}>Descripcion</Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs (1)}}>Informacion Adicional</Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => { setActiveTabs (2)
                                        }}>Puntuaciones</Button>
                                    </li>
                                </ul>

                                <br/>
                                {
                                    activeTabs === 0 &&
                                    <div className="tabContent">
                                        <p>descripcion total del producto</p>
                                    </div>
                                }

                                {
                                    activeTabs === 1 &&

                                    <div className="tabContent">
                                        <div className="table-responsive">
                                            <table className="table table-bordered ">
                                                <tbody>
                                                    <tr class="stand-up">
                                                        <th> stand up</th>
                                                        <td>
                                                            <p>Lorem</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="folded-wo-wheels">
                                                    <td>
                                                        <p>Lorem</p>
                                                    </td>

                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                }
                                {
                                    activeTabs === 2 &&

                                    <div className="tabContent">
                                        <div className="row">
                                            <div className="col-md-12">
                                            <h4>Preguntas y respuestas</h4>
                                            <br/>

                                            {
                                                <div className=" card p-4 reviewsCard flex-row">
                                                    <div className="image">
                                                        <div className="rounded-circle">
                                                            <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-1/302058928_593579385803327_8161394580572544965_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=lYfrX__JPLcQ7kNvgHlVoWF&_nc_ht=scontent-lim1-1.xx&_nc_gid=AmB5VRuvBtLVmfTLnGHKww4&oh=00_AYDh5SGfpoEvyg73f8ZmSQOp20kKvME_RNXf9xS0-fuLxQ&oe=66FF36D5" alt="yrenestar" />
                                                        </div>
                                                        <span className="text-g d-block text-center font-weigth-bold">erick acosta</span>
                                                    </div>

                                                    <div className="info pl-5">
                                                        <div className="d-flex align-items-center w-100">
                                                            <h5 className="text-sucess">02-09-85</h5>
                                                            <div className="ml-auto">
                                                                <Rating name="half-rating-read" value={5} size="small" precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                        <p>mensaje</p>
                                                    </div>

                                                </div>
                                            }

                                                <br className="res-hide" />   
                                                <br className="res-hide" />  

                                            <form className="reviewForm">
                                                <h4>Agregar Reseña</h4> 
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="escribe un comentario" name="review" ></textarea>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="nombre" name="username" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={1} size="small" precision={0.5} />
                                                        </div>
                                                    </div>
                                                </div>  
                                            
                                                <br/>

                                                <div className="form-group">
                                                    <Button type="submit" className="btn-blue btn-lg btn-big btn-round ">Enviar</Button>
                                                </div>
                                            
                                                </form>
                                        </div>
                                        
                                            
                                        </div>
                                        
                                    </div>
                                }
                                
                                

                            </div>
                        </div>

                        <br/>

                        

                        <RelatedProducts title="PORDUCTOS PROMOCIONADOS"/>

                        <RelatedProducts title="PORDUCTOS VISITADOS"/>


                </div>
                </section>
        </>)
    }


export default ProductDetails