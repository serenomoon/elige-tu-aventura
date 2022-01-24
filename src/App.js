import React, {useState} from 'react';
import { PageText, PageOptions } from './Page';

const App = () => {

    let [pageNumber, setCounter] = useState( 0 );
    
    const handleAdd = (e) => {
            if (e.target.id !== null){
                  setCounter(pageNumber = e.target.id)
              }
       }
    
    

    return (<>
    <h1 id="title">La Cueva del Tiempo</h1>

    <div className="book">

        <div className="book-inside">
            < PageText 
            pagetext = {pageNumber}
            />
        </div>
    
        <div className="buttons">
            < PageOptions 
            click={handleAdd}
            pages= {pageNumber}
            counter={setCounter}
            />
        </div>

    </div>
    </>);}

export default App;