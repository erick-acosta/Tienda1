

import { Button } from "@mui/material";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Quantilybox = () => {
    const [inputval, setInputVal]= useState(1);
    

    const minus=()=>{
        if(inputval!==1 && inputval>0){
        setInputVal(inputval-1);
        }
    }
    const plus=()=>{
        setInputVal(inputval+1);
    }
        
    

    return (
        
        <div className="quantityDrop d-flex align-items-center">
                        <Button onClick={minus} className="button1"><FaMinus /></Button>
                        <input type="text" value={inputval} />
                        <Button  onClick={plus} className="button1"><FaPlus /></Button>
        </div>

        
    )
}

export default Quantilybox