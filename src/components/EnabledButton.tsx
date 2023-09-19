import React from 'react';
import Button from '@mui/material/Button';

export type ButtonText = {
  text: string;
};

const enabledButton = {
  backgroundColor: '#0066FF',
  color: '#FFFFFF',
  fontSize: '18px',
  height: '50px',
  margin: '50px 100px',
  padding: '20px 50px',
  borderRadius: '6px',
  fontFamily: 'Pretendard',
  display: 'flex'
};

const EnabledButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <Button
      variant="contained"
      style={enabledButton}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default EnabledButton;
