import { Link } from "react-router-dom";
import Logo from "../../assets/img/EMBLEMA YRENNE - GF RGB.png";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import CiudadDropdown from "../ciudadDropdown";
import { Button } from "@mui/material";
import SearchBox from "./SearchBox";
import Navigation from "../Navigation";
import { MyContext } from "../../App";
import { useContext } from "react";
const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center"> informacion de la pagina</p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={Logo} alt="yrenestar"  />
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
              
                <CiudadDropdown />
                <SearchBox />

                <div className=" part3 d-flex align-items-center ml-auto">
                  {context.isLogin !== true ? (
                    <Link to="/signIn">
                      {" "}
                      <Button className="btn-blue btn-lg btn-big btn-round mr-3">
                        Ingresar
                      </Button>{" "}
                    </Link>
                  ) : (
                    <Button className="circle mr-3">
                      {" "}
                      <FiUser />{" "}
                    </Button>
                  )}

                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price"> $15.20 </span>
                    <div className="position-relative">
                      <Link to="/cart">
                        <Button className="circle ml-2">
                          {" "}
                          <IoBagOutline />{" "}
                        </Button>
                        <span className="count d-flex align-items-center justify-content-center">
                          {" "}
                          1{" "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
