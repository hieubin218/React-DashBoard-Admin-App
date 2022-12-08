import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip, Chart } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, AreaPrimaryYAxis, AreaPrimaryXAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Area = () => {
    return (
        <div className="">
            <Header category="" title="" />
            
        </div>
    )
}

export default Area