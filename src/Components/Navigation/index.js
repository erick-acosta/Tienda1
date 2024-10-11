import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";


const Navigation = () => {

    const [isOpenSidebarNavVal, setisOpenSidebarVal] =useState(false);


    return (
        <nav>
            <div className="container">
               <div className="row">
                <div className="col-sm-2 navPart1">

                    <div className="catWrapper">
                        <Button className="allCatTab align-items-center" onClick={()=>setisOpenSidebarVal(!isOpenSidebarNavVal)}>
                  
                   <span className="icon1 mr-2"><IoIosMenu /></span>
                   <span className="text">Todas las Categorias</span>
                   <span className="icon2 ml-2"><FaAngleDown /></span>

                        </Button>

                <div className={`sidebarNav ${isOpenSidebarNavVal===true ? 'open' : ''}`}>

                        <ul>                            
                            <li> 
                           
                                <Link to="/"><Button>Bebes<FaAngleRight className="ml-auto" /></Button></Link>
                                <div className="submenu">
                                <Link to="/"><Button>Nana -arullos</Button></Link>
                                <Link to="/"><Button>Mantas</Button></Link>
                                <Link to="/"><Button>Gorros -manoplas</Button></Link>
                                <Link to="/"><Button>Bucheros</Button></Link>
                                <Link to="/"><Button>Baberos Bandana</Button></Link>
                                <Link to="/"><Button>Baberos Clásicos</Button></Link>
                                </div>                    
                             </li>
                        
                            <li><Link to="/"><Button>Niñas <FaAngleRight className="ml-auto"  /></Button></Link>
                            <div className="submenu">
                            <Link to="/"><Button>Ropa niñas</Button>
                            <div className="submenu">
                            <Link to="/"><Button>vestidos</Button></Link>
                            <Link to="/"><Button>faldas</Button></Link>
                            <Link to="/"><Button>tutús</Button></Link>
                            <Link to="/"><Button>shorts</Button></Link>
                            <Link to="/"><Button>franelas</Button></Link>
                            <Link to="/"><Button>sudaderas</Button></Link>
                            <Link to="/"><Button>conjuntos</Button></Link>
                            
                            </div>
                            </Link>
                            <Link to="/"><Button>Pijamas clásicas</Button></Link>
                            <Link to="/"><Button>Pijamas Kigurumis</Button></Link>
                            <Link to="/"><Button>Disfraces</Button></Link>


                            </div>
                            </li>

                            <li><Link to="/"><Button>Niños <FaAngleRight className="ml-auto" /></Button></Link>
                            <div className="submenu">
                            
                            <Link to="/"><Button>Ropa niños</Button></Link>
                            <Link to="/"><Button>Pijamas clásicas</Button></Link>
                            <Link to="/"><Button>Pijamas Kigurumis</Button></Link>
                            <Link to="/"><Button>Disfraces</Button></Link>


                            </div>
                            </li>

                            <li><Link to="/"><Button>Disfrases</Button></Link></li>
                            



                            <li><Link to="/"><Button>accesorios <FaAngleRight className="ml-auto"  /></Button></Link>
                            <div className="submenu">
                            
                            <Link to="/"><Button>banderines</Button></Link>
                            <Link to="/"><Button>Cojines </Button></Link>
                            <Link to="/"><Button>teepee</Button></Link>
                            <Link to="/"><Button>muñecos de tela</Button></Link>
                            <Link to="/"><Button>capas superheroes</Button></Link>
                            <Link to="/"><Button>antifaces para dormir </Button></Link>
                            <Link to="/"><Button>scrunchies</Button></Link>
                            


                            </div>
                            </li>
                            
                            <li><Link to="/"><Button>otros</Button></Link></li>



                            
                            
                        </ul>
                    </div>


                   </div>
                </div>

                
                <div className="col-sm-10 navPart2 d-flex align-items-center">
                    <ul className="list list-inline ml-auto">
                        <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link></li>
                        <li className="list-inline-item"><Link to="/"><Button>Bebes</Button></Link>
                            <div className="submenu shadow">
                            <Link to="/"><Button>Nana -arullos</Button></Link>
                            <Link to="/"><Button>Mantas</Button></Link>
                            <Link to="/"><Button>Gorros -manoplas</Button></Link>
                            <Link to="/"><Button>Bucheros</Button></Link>
                            <Link to="/"><Button>Baberos Bandana</Button></Link>
                            <Link to="/"><Button>Baberos Clásicos</Button></Link>

                            </div>
                        </li>
                        <li className="list-inline-item"><Link to="/"><Button>Niñas</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>Ropa niñas</Button></Link>
                            <Link to="/"><Button>Pijamas clásicas</Button></Link>
                            <Link to="/"><Button>Pijamas Kigurumis</Button></Link>
                            <Link to="/"><Button>Disfraces</Button></Link>

                            </div>
                        </li>
                        <li className="list-inline-item"><Link to="/"><Button>niños</Button></Link>
                        <div className="submenu shadow">
                        <Link to="/"><Button>Ropa niños</Button></Link>
                            <Link to="/"><Button>Pijamas clásicas</Button></Link>
                            <Link to="/"><Button>Pijamas Kigurumis</Button></Link>
                            <Link to="/"><Button>Disfraces</Button></Link>

                            </div></li>
                        <li className="list-inline-item"><Link to="/"><Button>Accesorios</Button></Link>
                        <div className="submenu shadow">
                            <Link to="/"><Button>banderines</Button></Link>
                            <Link to="/"><Button>Cojines </Button></Link>
                            <Link to="/"><Button>teepee</Button></Link>
                            <Link to="/"><Button>muñecos de tela</Button></Link>
                            <Link to="/"><Button>capas superheroes</Button></Link>
                            

                            </div></li>
                        <li className="list-inline-item"><Link to="/"><Button>Bloq</Button></Link></li>
                        <li className="list-inline-item"><Link to="/"><Button>Regalos</Button></Link></li>
                       
                        <li className="list-inline-item"><Link to="/"><Button>Contacto</Button></Link></li>

                    </ul>



                </div>

               </div>
            </div>
        </nav>

    )


}

export default Navigation;