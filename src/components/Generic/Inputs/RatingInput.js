import React, { Fragment } from "react";
import Rating from "@material-ui/lab/Rating";

const RatingInput = ({ value, changeInput, name }) => {
  const onRatingChange = (e) => {
    changeInput({ val: Number(e.target.value), name , filterBy: "rating" });
  };
  return (
    <Fragment>
      <div id="ratingInput">
        <Rating
          name={name}
          value={value}
          onChange={onRatingChange}
          defaultValue={5}
          precision={0.5}
        />
      </div>
    </Fragment>
  );
};

export default RatingInput;
