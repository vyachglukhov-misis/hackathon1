import React, {useRef} from 'react';
import './SelectionBar.css';
const SelectionBar = ({setStringCount, stringCount, setCurrentPage, setPageCount, setSearchStr, setNeedToUpdate}) => {
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setStringCount(Number(e.target.stringCount.value));
        setPageCount(Math.floor(567090/stringCount));
        setSearchStr(e.target.search.value);
        setCurrentPage(1);
        setNeedToUpdate(true);
    }
    const filePicker = useRef();
    const handleFilePick = (e)=> {
        filePicker.current.click();
    }
    return (
        <div className='selectionBar-wrap'>
            <form onSubmit={handleFormSubmit}>
                <div className='row'>
                    <div className='col'>
                        <h3>Search by subSTR</h3>
                        <input type='text' className="form-control" name="search" placeholder='Search subSTR'/>
                    </div>
                    <div className='col'>
                        <h3>Enter the rows count on page</h3>
                        <input type='text' className="form-control" name="stringCount" placeholder='String count'/>
                    </div>
                    <div className='col'>
                        <input className="btn btn-primary submit-button" type="submit" value="Submit" />
                        <a class="btn btn-primary download-btn" href="http://127.0.0.1:8000/save_table" role="button">Download DB from server</a>
                        <a class="btn btn-primary download-btn" onClick={handleFilePick} role="button">Up</a>
                        <a className='hidden' href="http://127.0.0.1:8000/upload_table" ref={filePicker}></a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SelectionBar;