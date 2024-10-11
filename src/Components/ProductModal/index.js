import { Dialog, Button } from "@mui/material"
import Rating from '@mui/material/Rating';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import Quantilybox from "../Quantilybox";
import ProductZoom from "../ProductZoom";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";



const ProductModal = (props) => {

    return (

        <>
            <Dialog open={true} className="productModal" onClose={() =>props.closeProductModal()}>
                
            
                <Button className="close_" onClick={() =>props.closeProductModal()}> <IoMdClose /></Button>                
                <h4 class="mb-1 font-weight-bold"> Nombre del producto</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                    <span> <b>Modelo:</b></span>
                    <span className="ml-2"> tallas</span>
                    </div>

                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />

                </div>


                <hr/>

                <div className="row  mt-2 productDetaileModal">

                        <div className="col-md-4">
                            <ProductZoom/>
                        </div>
                

                    
                    
                    <div className="col-md-8">
                    <div className="d-flex info align-items-center mb-3">
                        <span className="oldPrice lg mr-2">$9.35</span>
                        <span className="netPrice text-danger lg">$9.35</span>
                    </div>
                    
                    <span className="badge bg-success"> En Stock</span>
                    <p className="mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className="d-flex align-items-center ">

                    <Quantilybox/>
                        
                    <Link to={"/product/:id"}> <Button className="btn-blue btn-lg btn-big btn-round ml-3"> Seleciona para comprar </Button> </Link> 
                        
                     </div>

                     <div className="d-flex align-items-center mt-5 actions">
                     <Button className="btn-round btn-sml" variant="outlined"> <IoIosHeartEmpty  /> &nbsp; Agregar a Lista</Button>
                     
                     
                     <Button className="btn-round btn-sml ml-3" variant="outlined"> <MdOutlineCompareArrows /> &nbsp; Comparar</Button>
                     
                       
                        
                    </div>
                    </div>

                    </div>
              


            </Dialog>



        </>

    )
}

export default ProductModal