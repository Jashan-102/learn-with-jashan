import React from 'react'

export default function SideBar(props) {

  const { sideBarItems } = props

  return (
    <div className='flex'>
      {/* <div className='sidebar fixed border-r-2'>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          </div>
          <div className="drawer-side">
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {sideBarItems?.length > 0 &&
                sideBarItems.map((item) =>
                  <li key={item.id}><a className='py-2' href={`#${item.id}`}>{item.sideBarTitle}</a></li>
                )
              }
            </ul>
          </div>
        </div>
      </div> */}
      <div className='main-content'>
        {props.children}
      </div>
    </div>
  )
}
