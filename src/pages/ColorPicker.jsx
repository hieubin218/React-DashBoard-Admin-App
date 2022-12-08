import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';
import { change } from '@syncfusion/ej2-react-grids';


const changeColor = (argument) => {
    document.getElementById('preview').style.backgroundColor = argument.currentValue.hex;
}


const ColorPicker = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Color Picker" />

            <div className='text-center'>
                <div id="preview" />
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div className="m-3">
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
                        <ColorPickerComponent
                            id="inline-pallete"
                            mode="Palette"
                            showButtons={false}
                            inline
                            modeSwitcher={false}
                            change={changeColor}
                        />
                    </div>

                    <div className='ml-3'>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>

                        <ColorPickerComponent
                            id="inline-pallete"
                            mode="Picker"
                            showButtons={false}
                            inline
                            modeSwitcher={false}
                            change={changeColor}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ColorPicker