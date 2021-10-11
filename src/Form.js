import  { Fragment, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Select from '@mui/material/Select';
import { jsx } from '@emotion/react';


const _address = [
    {
        value: 'Pune Maharashtra',
        label: 'Pune Maharashtra',
    },
    {
        value: 'Mumbai Maharashtra',
        label: 'Mumbai Maharashtra',
    },
    {
        value: 'Nagpur Maharashtra',
        label: 'Nagpur Maharashtra',
    },
];

const _unit = [
    {
        value: 'AP / 100',
        label: 'AP / 100',
    },
    {
        value: 'AP / 101',
        label: 'AP / 101',
    },
    {
        value: 'AP / 102',
        label: 'AP / 102',
    },
];
export const Form= ()=>  {
        const [values, setValues] = React.useState({
        supplierName: '',
        supplierAddress: '',
    });
    const handleChange = (prop)  => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const [address, setAddress] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    const handleChanged = (event) => {
        console.log(event)
        if (event.target.name === "select-address") setAddress(event.target.value);
        if (event.target.name === "select-unit") setUnit(event.target.value);

    };
    return (
        <>
            <div style={{ padding: "30px" }}>
                <b>Supplier Details</b>
                <hr className=" mt-2 mb-3" />
            </div>
            <Box style={{ paddingLeft: "100px", paddingRight: "50px", paddingBottom: "50px" }} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="col-md-6">
                    <FormControl fullWidth sx={{ m: 1 }} style={{padding: '10px'}}>
                        <InputLabel htmlFor="outlined-adornment-amount">Supplier Name <span style={{ color: 'red' }}>*</span></InputLabel>
                        <OutlinedInput
                            style={{ height: '45px' }}
                            id="outlined-adornment-amount"
                            value={values.supplierName}
                            onChange={handleChange('supplierName')}
                            label="Supplier Name"
                        />
                    </FormControl>
                </div>
                <div className="col-md-6">
                        <FormControl fullWidth sx={{ m: 1 }} style={{padding: '10px'}}>
                        <InputLabel id="demo-simple-select-label">Address</InputLabel>
                        <Select
                        style ={{height: '45px', padding: '12px'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={address}
                            label="Address"
                            onChange={handleChanged}
                            name ="select-address"
                        >
                            <option value={10}>Pune, Maharashtra</option>
                            <option value={20}>Mumbai, Maharashtra</option>
                            <option value={30}>Nagpur, Maharashtra</option>
                        </Select>
                    </FormControl>
                </div>
 
                <div className="col-md-6">
                        <FormControl fullWidth sx={{ m: 1 }} style={{padding: '10px'}}>
                        <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                        <Select
                        style ={{height: '45px', padding: '12px'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={unit}
                            label="Unit"
                            onChange={handleChanged}
                            name="select-unit"
                        >
                            <option value={10}>AP / 100</option>
                            <option value={20}>AP / 101</option>
                            <option value={30}>AP / 102</option>
                        </Select>
                    </FormControl>
                </div>

                <div className="col-md-6">
                <FormControl fullWidth sx={{ m: 1 }} style={{padding: '10px'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        
                            <KeyboardDatePicker className="form-control"
                                clearable
                                value={selectedDate}
                                placeholder="10/10/2018"
                                onChange={date => handleDateChange(date)}
                                minDate={new Date()}
                                format="MM/dd/yyyy"
                            />
                        
                    </MuiPickersUtilsProvider>
                    </FormControl>
                </div>
            </Box>

        </>
    );
}
