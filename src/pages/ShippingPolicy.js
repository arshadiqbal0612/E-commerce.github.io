import React from "react";
import BreadCrumb from "../component/BreadCrumb";
import Container from "../component/Container";
import Meta from "../component/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shippingg Pplicy"} />
      <BreadCrumb title="Shippingg Pplicy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;