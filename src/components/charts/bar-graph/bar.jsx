import React, { useState } from 'react'
import { ChartComponent,
  ColumnSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
  MultiColoredLineSeries,
  ColumnDirective,
  ColumnsDirective
} from '@syncfusion/ej2-react-charts'
import { dataBar, dateOptions } from '../../../dates/jummy'


const Bar = () => {
  let [modalCountries, setModalCountries] = useState(false)
  let [modalCities, setModalCities] = useState(false)
  let [cityArray, setCityArray]= useState([{city:'not found'}])
  let [changeCountry, setChangeCountry] = useState('Select Country')
  let [changeCity, setChangeCity] = useState('Cities')

  const toggleModalCountries = ()=>{
    setModalCountries((prev)=>{
      return !prev
    })
    setModalCities(false)
  }
  const SelectedCountry = (data)=>{
    setChangeCountry(data)
    setModalCountries(false)
  }
  const toggleModalCities = ()=>{
    setModalCities((prev)=>{
      return !prev
    })
    setModalCountries(false)
  }
  const SelectedCity = (data)=>{
    setChangeCity(data)
    setModalCities(false)
  }

  return (
    <div className='w-full '>
      <div className="flex justify-between items-center mb-4">
        <div className="text-zinc-900 font-medium">Hourly sales report</div>
        <div className="text-orange-600 text-sm font-semibold leading-tight cursor-pointer">
          View All
        </div>
      </div>
      <div className="w-full mb-4 justify-start items-center gap-3 flex flex-wrap">
        <div className="group relative grow w-full min-w-fit shrink basis-0 h-[42px] flex px-3.5 bg-white rounded-lg border border-neutral-200">
          <div className="items-center justify-between gap-3 w-full flex min-w-[120px]" onClick={toggleModalCountries}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeCountry}</div>
              <div>
                <i className='fa-solid fa-chevron-down'></i>
              </div>
            </div>
            <div className={`${modalCountries ? 'block':'hidden'} duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
              {
                dateOptions.map(({country,cities}, index)=>{
                  return(
                    <div key={index} onClick={()=>{
                      SelectedCountry(country)
                      setCityArray(cities)
                    }}
                    className='p-2 px-3 text-zinc-900 hover:text-orange=600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold'
                    >{country}</div>
                  )
                })
              }
            </div>
          </div>
          <div className="group relative grow min-w-fit shrink basis-0 h-[42px] flex px-3.5 bg-white rounded-lg border border-neutral-200">
          <div className="items-center gap-3 flex w-full min-w-[120px]" onClick={toggleModalCities}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeCity}</div>
            <div>
              <i className='fa-solid fa-chevron-down'></i>
            </div>
          </div>
          <div className={`${modalCities ? 'block':'hidden'} duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {
              cityArray.map(({city,multilocation}, index)=>{
                return(
                  <div key={index} onClick={()=>{
                    SelectedCity(city)
                  }}
                  className='p-2 px-3 text-zinc-900 hover:text-orange=600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold'
                  >{city}</div>
                )
              })
            }
          </div>
        </div>
        </div>
              <ChartComponent
                id='column-sparkLine'
                height='100%'
                width='100%'
                primaryXAxis={{
                  valueType:'Category',
                  majorGridLines:{width:0},
                  labelRotation: 90,
                  chartArea: {width: 20}
                }}
                primaryYAxis={{
                  minimum: 0,
                  maximum: 4500,
                  interval: 1500,
                  lineStyle: {width: 0},
                  majorTickLines:{width: 0},
                  minorTickLines:{width: 0}
                }}
                legendSettings={{mode : 'Range', background: 'white'}}
                tooltip={{enable: true}}
                chartArea={{border:{width:0}}}
              >
                <Inject services={[LineSeries,ColumnSeries,Legend,Tooltip,DataLabel,Category, MultiColoredLineSeries]}/>
                <ColumnsDirective>
                  <ColumnDirective width='100%'></ColumnDirective>
                  <ColumnDirective width='100%'></ColumnDirective>
                </ColumnsDirective>
                <SeriesCollectionDirective>
                  <SeriesDirective
                    xName='x'
                    yName='hours'
                    type='Column'
                    fill="#8fbfff"
                    dataSource={dataBar}
                    columnSpacing={0.1}
                    columnWidth={0.5}
                    cornerRadius={{
                      topLeft: 2,
                      topRight: 2
                    }}
                  ></SeriesDirective>
                </SeriesCollectionDirective>
              </ChartComponent>
    </div>
  )
}

export default Bar
