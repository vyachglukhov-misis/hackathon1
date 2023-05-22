import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectionBar from './SelectionBar';
import { useState, useEffect } from 'react';
import TableC from './Table';
import Pagination from './Pagination';

function App() {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [stringCount, setStringCount] = useState(100);
  const [isLoading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(Math.floor(560090/stringCount))
  const [colNumSort, setColNumSort] = useState(-1);
  const [reverse, setReverse] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const [needToUpdate, setNeedToUpdate] = useState(true);
  const dataFetch = async () => {
    setLoading(true);

    try{
        const res = await fetch(`http://127.0.0.1:8000/get_table?page=${currentPage}&count=${stringCount}&sort=${colNumSort}&reverse=${reverse}&search=${searchStr}`, {
        method: "POST"});
      const jsonedRes = await res.json();
      setContent(jsonedRes.data);
      console.log(jsonedRes);
    }catch(e){
      console.log(e);
    }finally{
      setLoading(false);
    }
  };


  useEffect(()=> {
    dataFetch();
    setNeedToUpdate(false);
  }, [needToUpdate, reverse, colNumSort, currentPage])
  return (
    <div className="App">
      <header className="App-header container">
        <SelectionBar setNeedToUpdate={setNeedToUpdate} setCurrentPage={setCurrentPage} stringCount={stringCount} setSearchStr={setSearchStr} setStringCount={setStringCount} setPageCount={setPageCount}/>
        {isLoading ? <div><h1>Collecting Data...</h1></div> :
        <TableC setNeedToUpdate={setNeedToUpdate} content={content} fetchData={dataFetch} setCurrentPage={setCurrentPage} setReverse={setReverse} setColNumSort={setColNumSort}/>}
        <Pagination pageCount={pageCount} setNeedToUpdate={setNeedToUpdate} currentPage={currentPage} setCurrentPage={setCurrentPage} stringCount={stringCount} />
      </header>
    </div>
  );
}

export default App;
