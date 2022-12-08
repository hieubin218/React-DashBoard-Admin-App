import React, {useEffect} from 'react';

// import some ICONS
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
//

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '.';


import {useStateContext} from '../contexts/ContextProvider';


const NavButton = ({title, customFunction, icon, color, dotColor}) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button type="button" 
            onClick={customFunction}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span style={{background: dotColor}}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                />
                    {icon}
        </button>
    </TooltipComponent>
);


// function
const Navbar = () => {
    const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

    // dependency array: when this going called 
    useEffect(() => {
        // arrow function
        const handleResize = () => setScreenSize(window.innerWidth);

        // track 'resize' options -> the, handle resize function
            // Everytime resize it, the screen size be setted to specific size
            // check "resize" option, if it's, recall handleResize function
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    
    // keep track the change of screen size
    useEffect(() => {
        if(screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])



    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            {/* div contains all other nav icons  */}
            <div classNa me='flex'>
                {/* NavButton for Menu icon * */}
                <NavButton 
                    title="Menu" 
                    customFunction={() => setActiveMenu((preActiveMenu) => !preActiveMenu)} 
                    color={currentColor}
                    icon={<AiOutlineMenu />} />
            </div>

            <div className='flex'>
                <NavButton 
                    title="Cart"
                    customFunction={() => handleClick('cart')}
                    color={currentColor}
                    icon={<FiShoppingCart />}
                />

                <NavButton 
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunction={() => handleClick('chat')}
                    color={currentColor}
                    icon={<BsChatLeft />}
                />

                <NavButton 
                    title="Notifications"
                    dotColor="#03C9D7"
                    customFunction={() => handleClick('notification')}
                    color={currentColor}
                    icon={<RiNotification3Line />}
                />

                <TooltipComponent
                    content="Profile"
                    position='BottomCenter'
                >
                    <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                        onClick={() => handleClick('userProfile')}>
                            <img className='rounded-full w-8 h-8' src={avatar} />
                            <p>
                                <span className='text-gray-400 text-14'>
                                    Hello, 
                                </span>

                                <span className='text-gray-400 font-bold ml-1 text-14'>
                                    Hieu Dang
                                </span>
                            </p>
                            
                            <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>


                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification  && <Notification />}
                {isClicked.uerProfile && <UserProfile />}

            </div>
        </div>
    )
}

export default Navbar

// <button> </button> wrapped inside the TooltipComponent tag.