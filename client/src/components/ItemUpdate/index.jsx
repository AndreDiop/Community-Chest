import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Sidenav from "../Sidenav";
import ItemForm from "../ItemForm/ItemForm";

const ItemUpdate = () => {
  const history = useHistory();
  const { id, locationId } = useParams();
  const handleFormSubmit = (event, formObject) => {
    event.preventDefault();
    axios
      .put(`/api/items/${id}`, formObject)
      .then((response) => {
        history.push(`/admin/locations/${locationId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <>
      <Sidenav />
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <img
                className="responsive-img"
                src="   https://wpcdn.us-east-1.vip.tn-cloud.net/www.sactownmag.com/content/uploads/2020/10/121610343_2690149421252095_9180172192574381574_n.jpg"
                alt="Colorfully designed community fridge"
              />
            </div>
            <div className="col s6">
              <ItemForm
                handleFormSubmit={handleFormSubmit}
                buttonText="Update Item"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemUpdate;
