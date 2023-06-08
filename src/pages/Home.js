import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../component/BlogCard";
import ProductCard from "../component/ProductCard";
import SpecialProduct from "../component/SpecialProduct";
import Container from "../component/Container";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute p-3">
                <h4>Supercharge for pros</h4>
                <h5>ipad s13+pro</h5>
                <p> From $100 or $400 </p>
                <Link className="Button ">Buy Now</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center  ">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best sale</h4>
                  <h5>ipad s13+pro</h5>
                  <p> From $100 or $400 </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4> New arrival</h4>
                  <h5>Buy Ipad AIR</h5>
                  <p> From $100 or $400 </p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharge for pros</h4>
                  <h5>ipad s13+pro</h5>
                  <p> From $100 or $400 </p>
                </div>
              </div>

              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Supercharge for pros</h4>
                  <h5>ipad s13+pro</h5>
                  <p> From $100 or $400 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="service d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-10">
                <img src="images/service.png" alt="service" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0"> From all order over $5</p>
                </div>
              </div>
              <div className="d-flex align-items-center  gap-10">
                <img src="images/service-02.png" alt="service" />
                <div>
                  <h6>Daily surprise offers </h6>
                  <p className="mb-0">Save upto 25% off </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-03.png" alt="service" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">shop with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-04.png" alt="service" />
                <div>
                  <h6>Afforadble Prices</h6>
                  <p className="mb-0">Get factory defaukt prices</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-10">
                <img src="images/service-05.png" alt="service" />
                <div>
                  <h6>secure payment</h6>
                  <p className="mb-0">100% protected payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="  home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex  justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center ">
                <div>
                  <h6>music and gaming</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/camera.jpg" alt=" camera" />
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>camera</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/camera.jpg" alt=" camera" />
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>smart tv</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/tv.jpg" alt=" camera" />
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>smart watches</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/headphone.jpg" alt=" camera" />
              </div>

              <div className="d-flex  align-items-center ">
                <div>
                  <h6>music and gaming</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/camera.jpg" alt=" camera" />
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>camera</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/camera.jpg" alt=" camera" />
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>smart tv</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/tv.jpg" alt=" camera" />
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>smart watches</h6>
                  <p> 10 items</p>
                </div>
                <img src="images/headphone.jpg" alt=" camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Feature collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/1.1.jpg" className="img-fluid " alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/store.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute ">
                <h5 className="text-white">Studio Display</h5>
                <h6 className="text-white">600 nits of brightness.</h6>
                <p className="text-white">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/hot.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-white">night out</h5>
                <h6 className="text-white">first date with friend.</h6>
                <p className="text-white">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/office.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-danger">home speakers</h5>
                <h6 className="text-danger">Room-filling sound.</h6>
                <p className="text-danger">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">Special product</div>
          </div>
        </div>

        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">our popular product</h3>
          </div>
        </div>

        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container
        className="marquee-wrapper home-wrapper
       py-5"
      >
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our latest Blogs</h3>
          </div>

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
