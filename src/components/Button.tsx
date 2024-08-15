import React from 'react';

interface ButtonProps {
    inTextBtn: string,
    shekil: string,
    klassadi: string
}

const Button: React.FC<ButtonProps> = ({ inTextBtn, shekil, klassadi }) => {
    return (
        <div>
            <button className={klassadi}><img src={shekil} alt="" /> {inTextBtn} </button>
        </div>

    );
};

export default Button;

