import React from 'react';

interface ButtonProps {
  inTextBtn: React.ReactNode;
  shekil: string;
  klassadi: string;
}

const NavButtons: React.FC<ButtonProps> = ({ inTextBtn, klassadi }) => {
  return (
    <button className={klassadi}>
      {inTextBtn}
    </button>
  );
};

export default NavButtons;
