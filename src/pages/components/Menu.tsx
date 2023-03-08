import React from 'react'

function Menu() {
  let Links =[
   {name: "Meer informatie", link:"/"},
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className='font-bold text-2xl cursor-pointer flex items-center'>
          <ul className='md:flex md:items-center'>
            {
              Links.map((link)=>(
                // eslint-disable-next-line react/jsx-key
                <li>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      </div>
  )
}

export default Menu