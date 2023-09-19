import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

const InputText = ({
    placeholder, 
    inputValue,
    setInputValue
  }:{
    placeholder:string, 
    inputValue:string,
    setInputValue: (input:string)=>void
  }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
  
  const inputBoxStyle = {
    fontSize: '18px',
    fontWeight: 400,
    color: '#000000',
    fontFamily: 'Pretendard',
    backgroundColor: '#FFFFFF'
  };

  return (
    <TextField
      variant='outlined'
      placeholder={placeholder}
      rows={1}
      fullWidth
      multiline={false}
      InputProps={{style: inputBoxStyle}}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default InputText;