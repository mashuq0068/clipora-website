import React from 'react';
import logo from '../../public/assets/images/logo.png';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='d-flex  align-items-center'>
            <Image style={{width:"100px"}} src={logo} alt="ClipJust" width={166} height={40} />
            <p style={{color:"white", fontWeight:700, marginLeft:'10px', fontSize:'30px'}}>Clip Just</p>
        </div>
    );
};

export default Logo;