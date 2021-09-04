import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import "./inputsStyle.scss";

const SelectInput = ({options, value, changeInput, name}) => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          width: "100%",
          marginBottom: "10px",
          minWidth: 80,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();
    const changeSelector = (e) => {
        changeInput({val: e.target.value, name, filterBy: "specs"});
    }
    return (
        <FormControl className={classes.formControl}>
        <InputLabel className="select--input--label" shrink htmlFor="age-native-label-placeholder">
          {name}
        </InputLabel>
        <Select
          native
          value={value}
          onChange={changeSelector}
          name={name}
          disabled={options?.length <= 0}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option aria-label="All">All</option>
          {
            options?.length > 0
          && options.map((option, idx) => {
            const capitalizedOption = option && `${option.charAt(0).toUpperCase()}${option.slice(1)}`;
         return(
            <option value={capitalizedOption} key={idx}>{capitalizedOption}</option>
         )
        })
          }
        </Select>
      </FormControl>
    )
}
SelectInput.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string.isRequired,
    changeInput: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}
export default SelectInput;