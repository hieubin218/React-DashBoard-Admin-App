import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiAlipay } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor}  = useStateContext();

    // if on Mobile Device, it close the sidebar
    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900) {
            // Close the Menu with condition
            setActiveMenu(false);
        }
    }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className={`ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10`}>
            {
                activeMenu && (<>
                    <div className="flex justify-between items-center">
                        <Link className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" 
                            to="/" 
                            onClick={() => handleCloseSideBar}
                        >
                            <SiAlipay /> 
                            <span>Shopee</span>
                        </Link>

                        {/** CLOSE BUTTON SIDEBAR */}
                        <TooltipComponent content="Closed" position="BottomCenter">
                        <button type="button" 
                                onClick={() => setActiveMenu((preActiveMenu) => !preActiveMenu)}
                                className='text-xl rounded-full p-3 mt-4 mr-3 hover:bg-light-gray'>
                                <MdOutlineCancel />
                        </button>
                        </TooltipComponent>
                    </div>

                    <div className='mt-10'>
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className='text-gray-400 m-3 mt-4 uppercase'>
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        className={({ isActive }) => isActive ? activeLink : normalLink}
                                        // the Sidebar color in left side of the Page is changed depends on the CurrentColor
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? 
                                            currentColor : ''
                                        })}
                                        >
                                        {link.icon}
                                        <span className='capitalize'>
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>)
            }
        </div>
    )
}
export default Sidebar


/** NOTES:
 * 1. ml-3: margin left -> push from the left
 * 1.5. mt-4: margin top -> push away from the top
 * 1.6. flex: make items in the row
 * 1.7. text-xl: text with extra large -> make the text bigger
 * 2. h-screen: full height
 * 3. md:overflow-hidden: Medium devices, overflow will be hidden
 * 4. overflow-auto: In regular, overflow will be set to Auto
 * 5. md:hover:overflow-auto: On Medium devices, hover or Overflow will be Auto
 * 6. dark:text-white: Dark mode, the text will be white in color (tailwind)
 * 7. tracking-tight
 * 
 */
