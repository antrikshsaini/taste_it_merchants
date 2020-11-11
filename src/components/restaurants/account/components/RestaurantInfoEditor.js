// Libraries
import React from "react"

// MaterialUI
import Button from '@material-ui/core/Button'
import TextField  from "@material-ui/core/TextField"
import MenuItem from '@material-ui/core/MenuItem'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';


const RestaurantInfoEditor = props =>{
  
  const { rName, 
          phoneNumber, 
          password, 
          description, 
          address,
          handleNameInputChange,
          handlePhoneNumberInputChange,
          handlePasswordInputChange,
          handleDescriptionInputChange,
          handleProvinceInputChange,
          handleCityInputChange,
          handleAddressInputChange,
          handlePostalCodeInputChange,
          saveInfo} = props

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    }
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }
          
    const [values, setValues] = React.useState({
      password: password,
      showPassword: false,
    });

  return(
    <form>
      <div>
        <h2>Account Information</h2>

        <TextField  fullWidth label="Restaurant Name" defaultValue={rName} variant="outlined" onChange={e => handleNameInputChange(e.target.value)}/>
        <TextField  fullWidth label="Phone Number" defaultValue={phoneNumber} variant="outlined" onChange={e => handlePhoneNumberInputChange(e.target.value)} />
        <TextField
          fullWidth 
          label="Password" 
          type="password" 
          value={password} 
          variant="outlined" 
          onClick={e => e.target.value = ''}
          onChange={e => handlePasswordInputChange(e.target.value)} />
        <TextField
          fullWidth
          label="Description"
          defaultValue={description}
          variant="outlined"
          onChange={e => handleDescriptionInputChange(e.target.value)}
          multiline
          rows={4}
        />

      </div>
      
      <div>

        <h2>Location</h2>
        <TextField
        select
        label="Province"
        variant="outlined"
        defaultValue={address.provinceDescription}
        fullWidth
        onChange={e => handleProvinceInputChange(e.target.value)}
        >
          <MenuItem key='1' value='British Columbia'>British Columbia</MenuItem>
        </TextField>

        <TextField
        select
        label="City"
        variant="outlined"
        defaultValue={address.cityDescription}
        fullWidth
        onChange={e => handleCityInputChange(e.target.value)}
        >
          <MenuItem key='1' value='Vancouver'>Vancouver</MenuItem>
          <MenuItem key='2' value='Richmond'>Richmond</MenuItem>
          <MenuItem key='3' value='Burnaby'>Burnaby</MenuItem>
          <MenuItem key='4' value='North Vancouver'>North Vancouver</MenuItem>
        </TextField>

        <TextField  fullWidth label="Address" defaultValue={address.address} variant="outlined" onChange={e => handleAddressInputChange(e.target.value)} />

        <TextField fullWidth label="Postal Code" defaultValue={address.postcode} variant="outlined" onChange={e => handlePostalCodeInputChange(e.target.value)} />
      </div>

      <Button onClick={saveInfo}>Save New Change</Button>
    </form>
  )
}

export default RestaurantInfoEditor