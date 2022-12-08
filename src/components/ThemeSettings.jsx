import React from 'react'

// icon
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const ThemeSettings = () => {
    const {setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext();


    return (
        <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
                <div className="flex justify-between items-center p-4 ml-4">
                    <p className="font-semibold text-lg">Settings</p>
                    <button 
                        className="text-2xl p-3 hover:drop-shadow-xl bg:light-gray"
                        type="button" 
                        onClick={() => setThemeSettings(false)}
                        style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>

                <div className="border-t-1 flex-col border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Themes Options</p>
                </div>
                <div className="mt-4">
                    <input
                        className="cursor-pointer"
                        id="light"
                        type="radio"
                        name="theme"
                        value="Light"
                        checked={currentMode === 'Light'}
                        onChange={setMode} 
                    />
                    <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
                </div>

                <div className="mt-4">
                    <input
                        className="cursor-pointer"
                        id="dark"
                        type="radio"
                        name="theme"
                        value="Dark"
                        checked={currentMode === 'Dark'}
                        onChange={setMode}
                    />
                    <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>Dark</label>
                </div>

                <div className="border-t-1 flex-col border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Themes Options</p>

                    <div className="flex gap-3">
                        {themeColors.map((item, index) => (
                            <TooltipComponent 
                                key={index} 
                                content={item.name}
                                position="TopCenter">
                                    <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                                        <button
                                            className="h-10 w-10 rounded-full cursor-pointer"
                                            type="button"
                                            style={{backgroundColor: item.color}}
                                            onClick={() => setColor(item.color)}
                                        >
                                            <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block': 'hidden'}`} />
                                        </button>
                                    </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThemeSettings