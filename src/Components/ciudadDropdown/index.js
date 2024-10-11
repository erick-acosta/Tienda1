import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CiudadDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <>
      <Button className="ciudadDropdown" onClick={() => setisOpenModal(true)}>
        <div className=" info d-flex flex-column">
          <span className="label"> Ciudad</span>
          <span className="name"> Caracas</span>
        </div>
        <span className="ml-auto ">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
        TransitionComponent={Transition}
      >
        <h5 className="mb-0">Seleciona tu Ciudad para el Envio</h5>
        <p>Verifica ver las ofertas de la zona</p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          <IoMdClose />
        </Button>

        <div className="headerSearch  w-100">
          <input type="text" placeholder=" Busqueda por tu ciudad" />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="listaCiudades mt-3">
          <li>
            <Button onClick={() => setisOpenModal(false)}>Caracas</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Valencia</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CiudadDropdown;
