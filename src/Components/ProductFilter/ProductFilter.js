import React, { useContext } from "react";
import { useNavigate } from "react-router";
import "./ProductFilter.css";
import ColorFilter from "./ColorFilter/ColorFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import ButtonFilter from "./ButtonFilter/ButtonFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { UsersContext } from "../Services/Users/Users.Context";

const ProductFilter = ({
  filterProducts,
  clearProductsFilters,
  filters,
  userList,
}) => {
  const { userType } = useContext(UsersContext);
  const navigate = useNavigate();
  const goToAddUser = () => {
    navigate("/addUser");
  };
  const goToDeleteUser = () => {
    navigate("/deleteUser", { state: { userList } });
  };
  const goToModifyUser = () => {
    navigate("/modifyUser", { state: { userList } });
  };
  return (
    <div className="divFilters">
      <ColorFilter
        colorFilter={filters.color}
        filterProducts={filterProducts}
      />
      <SizeFilter sizeFilter={filters.size} filterProducts={filterProducts} />
      <PriceFilter
        priceFilter={filters.price}
        filterProducts={filterProducts}
      />
      <ButtonFilter clearProductsFilters={clearProductsFilters} />
      {userType === "superadmin" && (
        <div className="d-flex pr-4">
          <button
            className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
            type="button"
            onClick={goToAddUser}
          >
            <FontAwesomeIcon
              icon={faUserPlus}
              size="2xl"
              style={{ color: "#0bf207" }}
            />
          </button>
          <button
            className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
            type="button"
            onClick={goToModifyUser}
          >
            <FontAwesomeIcon
              icon={faUserPen}
              size="2xl"
              style={{ color: "#0079fa" }}
            />
          </button>
          <button
            className="bg-white-150 hover:bg-white-400 text-green font-bold m-1 pr-8"
            type="button"
            onClick={goToDeleteUser}
          >
            <FontAwesomeIcon
              icon={faUserXmark}
              size="2xl"
              style={{ color: "#fb0404" }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
