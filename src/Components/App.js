'use strict';

import React, { Fragment, useState, useEffect } from 'react';
import FilterComponent from './FilterComponent/index';
import GalleryComponent from './Gallery/index';
import * as data from '../data.json';
function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [filterStyles, setFiltersStyles] = useState([])
    const [filterQuality, setFiltersQuality] = useState([])
    const [arr, setArr] = useState(data.data)

    const filterData = () => {
      let arrTemp = []
      if (filterStyles.length > 0){
        arr.map(element => {
            element.metaData.designStyle.map(e => {
              let item = filterStyles.find(item => item === e);
              if (item){
                arrTemp.push(element)
              }
            })
        }
        )
        setArr(arrTemp)
      }
      
      if (filterQuality.length > 0){
        arr.map(element => {
          element.metaData.qualityStandard.map(e => {
            let item = filterQuality.find(item => item === e);
            if (item){
              arrTemp.push(element)
            }
          })
        }
        )
        setArr(arrTemp)
      }
    } 

    const clear = () => {
      setArr(data.data)
    }

    useEffect(() => {
      filterData();
    }, [filterStyles, filterQuality]);
    return (
      <Fragment>
        <FilterComponent 
          designs={data.designStyle} 
          quality={data.qualityStandard} 
          filterStyles={filterStyles} 
          setFiltersStyles={setFiltersStyles} 
          filterQuality={filterQuality}
          setFiltersQuality={setFiltersQuality}
          clear={clear}
        />
        <GalleryComponent 
          data={arr} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
      </Fragment>
    );
  }

export default App;