import React from 'react';
import './Table.css';
import 'react-virtualized/styles.css'

import {List, AutoSizer, CellMeasurer, CellMeasurerCache, Column, Table} from 'react-virtualized';

const TableC = ({content, fetchData, setColNumSort, setReverse}) => {

    var data = [];
    for(var i=0; i<content.length; i++){
        data.push({
            date: content[i][0],
            city: content[i][1],
            state: content[i][2],
            allAccidents: content[i][3],
            newAccidents: content[i][4],
            lethalAccidents: content[i][5]
        })
    }
    const onHeaderClick= ({columnData, dataKey, event}) => {
        tableHeaders[dataKey] +=1;
        if (tableHeaders[dataKey] !=3) {
            if(tableHeaders[dataKey]==1){
                if(dataKey=="date"){
                    setColNumSort(0);
                    setReverse(true)
                }else if (dataKey=="city"){
                    setColNumSort(1);
                    setReverse(true)
                }else if (dataKey=="state"){
                    setColNumSort(2);
                    setReverse(true)
                }
                else if (dataKey=="allAccidents"){
                    setColNumSort(3);
                    setReverse(true)
                }
                else if (dataKey=="newAccidents"){
                    setColNumSort(4);
                    setReverse(true)
                }
                else if (dataKey=="lethalAccidents"){
                    setColNumSort(5);
                    setReverse(true)
                }
            }
            if(tableHeaders[dataKey]==2){
                if(dataKey=="date"){
                    setColNumSort(0);
                    setReverse(false)
                }else if (dataKey=="city"){
                    setColNumSort(1);
                    setReverse(false)
                }else if (dataKey=="state"){
                    setColNumSort(2);
                    setReverse(false)
                }
                else if (dataKey=="allAccidents"){
                    setColNumSort(3);
                    setReverse(false)
                }
                else if (dataKey=="newAccidents"){
                    setColNumSort(4);
                    setReverse(false)
                }
                else if (dataKey=="lethalAccidents"){
                    setColNumSort(5);
                    setReverse(false)
                }
            }
            
            
        }else {
            tableHeaders[dataKey] = 0;
            setColNumSort(-1);
            setReverse(false)
        }
        
    }
    const tableHeaders ={
        date: 0,
        city: 0,
        state: 0,
        allAccidents: 0,
        newAccidents: 0,
        lethalAccidents: 0
    }

        return (
            <Table
                width={1270}
                height={700}
                headerHeight={20}
                rowHeight={30}
                rowCount={data.length}
                onHeaderClick={onHeaderClick}
                rowGetter={({index}) => data[index]}>
                <Column width={200} label="Date" dataKey="date" />
                <Column width={300} label="City" dataKey="city" />
                <Column width={300} label="State" dataKey="state" />
                <Column width={300} label="All Accidents" dataKey="allAccidents" />
                <Column width={300} label="New Accidents" dataKey="newAccidents" />
                <Column width={300} label="Lethal Accidents" dataKey="lethalAccidents" />
            </Table>
        )
}

export default TableC;