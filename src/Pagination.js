import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({pageCount, currentPage, setCurrentPage, setNeedToUpdate}) => {
    const handleNextBtn = () => {
        if(!(currentPage == pageCount)) {
            setCurrentPage((prev)=> prev+1)
        }
    }
    const handleBtnClick =(e)=> {
        setCurrentPage(Number(e.target.value));
        setNeedToUpdate(true);
    }
    const handleStartBtn =()=> {
        setCurrentPage(1);
        setNeedToUpdate(true);
    }
    const handlePrevBtn =()=>{
        if(currentPage!=1){
            setCurrentPage((prev)=> prev-1)
        }

    }
    const handleEndBtn = () => {
        setCurrentPage(pageCount);
        setNeedToUpdate(true);
    }
    return (
        <div className='pagination-buttons'>
            <button className='btn start-btn' onClick={handleStartBtn}>{"|<<"}</button>
            <button className='btn prev-btn' onClick={handlePrevBtn}>{"<"}</button>
            
            {(()=>{
                const buttons = []
                if(currentPage < 3){
                    for(var i=0; i<5; i++){
                        if(i+1 == currentPage){
                            buttons.push(<button onClick={handleBtnClick} value={i+1} className='btn active'>{i+1}</button>)
                        }else{
                            buttons.push(<button onClick={handleBtnClick} value={i+1} className='btn'>{i+1}</button>)
                        }
                    }
                }else if(currentPage>=3 & pageCount-currentPage>=2){
                    for(var i=-2; i<3; i++){
                        if(i==0){
                            buttons.push(<button onClick={handleBtnClick} value={currentPage+i} className='btn active'>{currentPage+i}</button>)
                        }
                        else{
                            buttons.push(<button onClick={handleBtnClick} value={currentPage+i} className='btn'>{currentPage+i}</button>)
                        }
                    }
                }else if(pageCount-currentPage<2 ){
                    for(var i=-4; i<1; i++){
                        if(pageCount+i==currentPage){
                            buttons.push(<button onClick={handleBtnClick} value={pageCount+i} className='btn active'>{pageCount+i}</button>)
                        }else{
                            buttons.push(<button onClick={handleBtnClick} value={pageCount+i} className='btn'>{pageCount+i}</button>)
                        }
                    }
                    
                }
                return buttons;
            })()}
            
            <button className='btn next-btn btwbtn' onClick={handleNextBtn}>{">"}</button>
            <button className='btn end-btn' onClick={handleEndBtn}>{">>|"}</button>
        </div>
    )
}

export default Pagination;