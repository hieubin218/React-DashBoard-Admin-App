import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip, Chart } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
    const {currentMode} = useStateContext();

    return ( 
        <ChartComponent
            id="line-chart"
            height="420px"
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            // Remove Border off the Chart
            chartArea={{border: { width:0 }}}
            // Provide detailed information of each point
            tooltip={{ enable: true}}
            background={currentMode === "Dark" ? "#33373E": "#fff"}
        >
            <Inject services={[DateTime, LineSeries, Legend, Tooltip]} />


            <SeriesCollectionDirective>
                {
                    lineCustomSeries.map((item, index) => 
                        <SeriesDirective key={index} {...item} />
                    )
                }
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart