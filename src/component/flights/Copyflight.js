import React from 'react'

function Copyflight({Sdata}){
  // console.log(props)
  return (
    <>
    <div className='Cards'>
    <div className='card'>
    <img scr={Sdata.imgscr} alt='/#' className='card_img' />
    <div className= 'Crad_info' >
    <sapn className='card_catagry' >{Sdata.title }</sapn>
    <h3>{Sdata.sname}</h3>
    <a href={Sdata.link}></a>
    </div>
       </div>
    </div>
    </>
  )
}

export default Copyflight