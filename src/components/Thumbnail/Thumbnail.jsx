import React from 'react';

import muiStyles from './muiStyles.js';
import { useNavigate } from "react-router-dom";
import { ButtonBase } from '@mui/material'

const Thumbnail = ({ imgW, imgH, imgSrc, imgAlt, head, detail, linkTo }) => {
  
  const navigate = useNavigate();
    
  const openOffer = () => navigate(linkTo);

  return (
    <ButtonBase style={muiStyles.cardAction} className="hover:bg-gray-300/60" onClick={openOffer}>
      <div className="flex flex-col justify-center items-center px-8 py-5 rounded-xl">
        <div className="rounded-xl overflow-hidden">
          <img src={imgSrc} alt={imgAlt} style={{ width: imgW }} className={`h-[${imgH}] object-cover`} />
        </div>
        <div className="text-lg text-primary font-bold mt-4">{head}</div>
        <div className="text-sm text-[#9A9A9A] mt-2" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', width: imgW }}>{detail}</div>
      </div>
    </ButtonBase>
  )
}

export default Thumbnail