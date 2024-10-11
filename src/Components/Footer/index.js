import { MdOutlineDesignServices } from "react-icons/md";
import { FaTruckPickup } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiBadgeDollar } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";


const   Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">

                        <span><MdOutlineDesignServices /></span>
                        <span className="ml-2"> Diseños Unicos</span>

                    </div>
                    <div className="col d-flex align-items-center">

                        <span><FaTruckPickup /></span>
                        <span className="ml-2"> Pickup Gratis</span>

                    </div>
                    <div className="col d-flex align-items-center">

                        <span><LiaShippingFastSolid /></span>
                        <span className="ml-2"> Envios Nacionales</span>

                    </div>
                    <div className="col d-flex align-items-center">

                        <spam><CiBadgeDollar /></spam>
                        <span className="ml-2"> Los mejores precios</span>

                    </div>

                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>Bebes</h5>
                    <ul>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    </ul>
                    </div>
                    <div className="col">
                        <h5>Niñas</h5>
                    <ul>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    </ul>
                    </div>
                    <div className="col">
                        <h5>Niños</h5>
                    <ul>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    </ul>
                    </div>
                    <div className="col">
                        <h5>Accesorio</h5>
                    <ul>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    </ul>
                    </div>
                    <div className="col">
                        <h5>Bebes</h5>
                    <ul>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    <li><Link to="#">Bebes</Link></li>
                    </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex .socials">
                <p className="mb-0"> © 2024. Todos los Derechos Reservados Yrenestar</p>
                <ul className="list list-inline ml-auto mb-0 socials">
                    <li className="list-inline-item"><Link to="#"><FaFacebookF /></Link></li>
                    <li className="list-inline-item"><Link to="#"><FaInstagram /></Link></li>
                    

                </ul>

                </div>

            </div>
        </footer>
    );
}

export default Footer