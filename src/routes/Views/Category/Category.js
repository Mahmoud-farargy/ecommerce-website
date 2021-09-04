import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RangeInput from "../../../components/Generic/Inputs/RangeInput";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ProductItem from "../../../components/ProductItems/ProductItem/ProductItem";
import SelectInput from "../../../components/Generic/Inputs/SelectInput";
import RatingInput from "../../../components/Generic/Inputs/RatingInput";
import "./Category.scss";

const Category = ({ staticData, changeCurrentPage }) => {
  const { type } = useParams();

  // useState
  const [currData, setCurrData] = useState(staticData?.[type] || []);
  const [maxPrice, setMaxPrice] = useState(100);
  const [filterInputs, setFilterInputs] = useState({
    priceSlider: maxPrice,
    material: "All",
    brand: "All",
    color: "All",
    size: "All",
    rating: 5
  });
  const [filerOptions, setFilterOptions] = useState({
    color: [],
    brand: [],
    size: [],
    material: [],
  });
  const [filteredData, setFilteredData] = useState(currData || []);

  // useEffect
  useEffect(() => {
    changeCurrentPage(
      `${type.charAt(0).toUpperCase() + type.slice(1)} Category`
    );
    console.log("list>>",currData);
  }, [changeCurrentPage, type]);

  useEffect(() => {

    //------Filteration--------
    let tempItems = [...currData];
    // handle specs
    Object.keys(filterInputs).forEach((key) => {
      if (
        typeof filterInputs?.[key] === "string" &&
        tempItems.some((el) => el.hasOwnProperty(key))
      ) {
        const filterInputValue = filterInputs?.[key]?.toLowerCase();
        tempItems = tempItems.filter((item) =>
          filterInputValue === "all"
            ? item
            : filterInputValue === item?.[key]?.toLowerCase()
        );
      }
    });
    // Handle price
    tempItems = tempItems.filter(
      (item) => filterInputs?.priceSlider >= item.price
    );
    // Hande rating
    console.log("rating>>>", filterInputs?.rating, tempItems);
    tempItems = tempItems.filter(item => +filterInputs?.rating >= +item.rating);
    setFilteredData(tempItems);
    //-----xx end of filteration xx----

  }, [filterInputs, currData]);

  useEffect(() => {
    setCurrData(staticData?.[type] || []);
    setMaxPrice(
      currData.length > 0
        ? currData.sort((a, b) => b.price - a.price)[0].price
        : 100
    );
    setFilterInputs({ ...filterInputs, priceSlider: maxPrice });
    setFilterOptions(handleOptions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staticData, type, currData, maxPrice]);

  useEffect(() => {
    setFilteredData(currData);
    let restedInputData = filterInputs;
    Object.keys(filterInputs).forEach(key => {
        if(typeof filterInputs?.[key] === "string"){
             restedInputData[key] = "All";
        }
    });
    setFilterInputs(restedInputData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, currData]);

  const handleOptions = () => {
    if (type && staticData.hasOwnProperty(type)) {
      let result = filerOptions;
      const addOptions = (list, key) => {
        result = {
          ...result,
          [key]: list.length > 0 ? list : [],
        };
      };
      Object.keys(filerOptions).forEach((key) => {
        if (staticData?.[type]?.some((el) => el.hasOwnProperty(key))) {
          addOptions(
            [...new Set(staticData?.[type].map((el) => el[key]))],
            key
          );
        } else {
          result = {
            ...result,
            [key]: [],
          };
        }
      });

      return result;
    } else {
      return filerOptions;
    }
  };

  const changeInput = useCallback(
    ({ val, name, filterBy }) => {
        console.log(val, name, filterBy);
      if (
        val !== undefined &&
        filterInputs?.hasOwnProperty(name) &&
        type &&
        staticData.hasOwnProperty(type) &&
        filterBy
      ) {
          
        setFilterInputs({
          ...filterInputs,
          [name]: val,
        });
      }
    },
    [filterInputs, type, staticData]
  );

  if (type && staticData.hasOwnProperty(type)) {
    return (
      <Fragment>
        <div id="category">
          <div className="category--inner">
            <SectionHeader title={type} />
            <div className="category--layout flex-row d--container">
              <aside className="category--side--filters">
                <div className="category--filter--item">
                  <h4>Filter by Specs</h4>
                  <SelectInput
                    changeInput={(e) => changeInput(e)}
                    options={filerOptions.material}
                    value={filterInputs?.material}
                    name="material"
                  />
                  <SelectInput
                    changeInput={(e) => changeInput(e)}
                    options={filerOptions.brand}
                    value={filterInputs?.brand}
                    name="brand"
                  />
                  <SelectInput
                    changeInput={(e) => changeInput(e)}
                    options={filerOptions.color}
                    value={filterInputs?.color}
                    name="color"
                  />
                  <SelectInput
                    changeInput={(e) => changeInput(e)}
                    options={filerOptions.size}
                    value={filterInputs?.size}
                    name="size"
                  />
                </div>
                <div className="category--filter--item">
                  <h4>Filter by Price</h4>
                  <RangeInput
                    changeInput={(e) => changeInput(e)}
                    value={filterInputs?.priceSlider}
                    maxPrice={maxPrice}
                    name="priceSlider"
                  />
                </div>
                <div className="category--filter--item">
                  <h4>Filter by Rating</h4>
                  <RatingInput
                    changeInput={(e) => changeInput(e)}
                    value={filterInputs?.rating}
                    name="rating"
                  />
                </div>
              </aside>
              {filteredData?.length > 0 ? (
                <div className="category--products">
                  {filteredData.slice(0,100).map(
                    (item, idx) =>
                      item && <ProductItem key={item.id || idx} item={item} />
                  )}
                </div>
              ) : (
                <div className="empty--content">
                  Unfortunately no items matched your search parameters
                </div>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="empty--content">Sorry, Category is not available.</div>
    );
  }
};
Category.propTypes = {
  staticData: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    staticData: state.main.staticData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentPage: (title) => dispatch({ type: "changePageTitle", title }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
