import { IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";

const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder=" Busqueda por productos" />
      <Button>
        <IoIosSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
