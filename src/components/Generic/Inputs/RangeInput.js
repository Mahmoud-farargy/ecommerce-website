import React from "react";
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

const PrettoSlider = withStyles({
    root: {
      color: 'var(--primary-clr)',
      height: 5,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


export default function CustomizedSlider(props) {
    const { changeInput, value, name, maxPrice } = props;
    const sliderChange = (_, val) => {
        changeInput({val, name, filterBy: "price"});
    }
    return (
    <>
        <Typography gutterBottom>$0 to ${value}</Typography>
        <PrettoSlider valueLabelDisplay="auto" onChange={sliderChange} min={0} max={maxPrice} value={(value !== undefined ? value : (maxPrice || 100))} name={name} aria-label="pretto slider" defaultValue={maxPrice} />
    </>
    );
}
CustomizedSlider.propTypes = {
    changeInput: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    maxPrice: PropTypes.number.isRequired
}