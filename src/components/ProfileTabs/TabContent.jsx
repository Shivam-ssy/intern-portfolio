import React from 'react'

function TabContent() {
    const projectImages= [
        "/Project.png",
        "/Project2.png",
        "/Project3.png",
        "/Project2.png",
        "/Project.png",
        "/Project2.png",
      ];
  return (
    <div className='grid grid-cols-1 place-items-center md:grid-cols-3'>
      {
        projectImages.map((image,i)=>(
            <img src={image} alt="" />
        ))
      }
    </div>
  )
}

export default TabContent
