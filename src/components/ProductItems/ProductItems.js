import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import "./ProductItems.scss";
import ItemsCarousel from "react-multi-carousel";
import ProductItem from "./ProductItem/ProductItem";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
const ProductItems = ({list}) => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return list && list.length > 0 &&  (
        <Fragment>
             <div id="trendingItems">
             <div >
      <ItemsCarousel
       swipeable={true}
       draggable={true}
       showDots={false}
       responsive={responsive}
       customRightArrow={<RiArrowRightSLine className="carousel--chevron--icon carousel--chevron--right"/>}
       customLeftArrow={<RiArrowLeftSLine className="carousel--chevron--icon carousel--chevron--left"/>}
       ssr={true} // means to render carousel on server-side.
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={1000}
       pauseOnHover={true}
       keyBoardControl={true}
       customTransition="all .5"
       transitionDuration={5000}
       containerClass="carousel-container"
      //  removeArrowOnDeviceType={["tablet", "mobile"]}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
      > 
        {
                list.map((item, index) => {
                        return item && (
                            <ProductItem key={item.id || index} item={item} />
                        )
                })
        }
      </ItemsCarousel>
    </div>

            </div>
        </Fragment>
    )
}

ProductItems.propTypes = {
    list: PropTypes.array.isRequired
}
export default memo(ProductItems);