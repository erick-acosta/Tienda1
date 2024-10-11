import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import  Button  from "@mui/material/Button";
import ProductModal from '../ProductModal';
import { useState } from 'react';
import disfras1 from '../../assets/img/disfras2.png';

const ProductItem = (props) => {

    const [isOpenProductModal,setisOpenProductModal] = useState(false);
    const viewProductDetails = (id) => {    
            setisOpenProductModal(true);
    }
    const closeProductModal = () => {
        setisOpenProductModal(false)
    }
    return(
        <>
            <div className={`productItem ${props.itemView}`} onClick={()=>viewProductDetails(1)}>
        <div className="imgWrapper ">
        <img src={disfras1} className="w-100" alt="producto"   ></img>
    <span className="badge badge-primary">25%</span>

        <div className="actions">

            <Button onClick={()=>viewProductDetails(1)}> <SlSizeFullscreen /></Button>
            <Button> <IoIosHeartEmpty style={{fontSize:'20px'}} /></Button>

        </div>


    </div>

    <div className="info">
    <h4>Nombre del Producto</h4>
    <span className="text-success d-block">En Stock</span>                            
    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
    <div className="d-flex">
        <span className="oldPrice">$20.00</span>
        <span className="netPrice text-danger ml-2">$15.00</span>

    </div>
    
    </div>  
        </div>

        {
            isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}/>
        }
       
        </>

       
    )

}


export default ProductItem