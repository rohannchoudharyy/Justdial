import React from 'react'

function ServicesSectionBox({head,pict1,sub1,sub2,sub3,pict2,pict3}) {
    return (
        <div className='Servicessec-box'>
            <h2>{head}</h2>
            <div className='serviceimgBox'>
                <div>
                    <img src={pict1} alt="" />
                    <p>{sub1}</p>
                </div>
                <div>
                    <img src={pict2} alt="" />
                    <p>{sub2}</p>
                </div>
                <div>
                    <img src={pict3} alt="" />
                    <p>{sub3}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSectionBox