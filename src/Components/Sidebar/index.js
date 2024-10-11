import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import banner1 from "../../assets/img/banner1.png"
import { Link } from 'react-router-dom';



const Sidebar = ( ) => {

    const [value, setValue] = useState([1,1000]);
    const [value2, setValue2] =useState(0);



    return (
        <>
            <div className="sidebar">
            <div className='sticky'>
                <div className="filterBox">
                    <h6>Productos por Categorias</h6>

                    <div className='scroll'>
                        <ul>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="Bebes" />

                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="Niñas" />

                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="Niños" />

                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="Accesorios" />

                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="Pijamas" />

                            </li>

                        </ul>




                    
                    </div>
                    
                </div>
                <div className="filterBox">
                <h6>Filtro por Precios</h6>

                <RangeSlider value={value} onInput={setValue} min={1} max={300} step={1}/>

                <div className="d-flex pt-2 pb-2 priceRange">
                    <span>Desde: <strong className='text-dark'> $: {value[0]}</strong></span>
                    <span className='ml-auto'>Hasta: <strong className='text-dark'> $: {value[1]}</strong></span>
                </div>



                </div>

                <div className="filterBox">
                    <h6>Productos por Disponibilidad</h6>

                    <div className='scroll'>
                        <ul>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="En Stock" />

                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="Bajo Pedidos" />

                            </li>


                        </ul>                    
                    </div>
                 </div>

                 <div className="filterBox">
                    <h6>Por Tallas</h6>

                    <div className='scroll'>
                        <ul>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="2" />
                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="4" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="6" />
                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="8" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="10" />
                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="12" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="14" />
                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="16" />
                            </li>
                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="S" />
                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="M" />
                            </li>

                            <li>
                            <FormControlLabel className='w-100' control={<Checkbox  />} label="L" />
                            </li>


                        </ul>                    
                    </div>
                 </div>

                 <Link to="#"><img src={banner1} className='w-100'/></Link>
                 </div>
            </div>
        </>
    )

}


export default  Sidebar;
