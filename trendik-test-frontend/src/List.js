import React, {useState} from 'react';
import ListofFollowers from './ListofFollowers'
import './App.css';
import Pagination from './Pagination';

function List(props) {

    //create a new array by filtering the original array
    const filteredData = props.items.filter((el) => {
        //if no input the return the original
        if (props.country === '') {
            return (el.firstName.toLowerCase().includes(props.input) || el.lastName.toLowerCase().includes(props.input)) && el.typeofinfluencer == props.type && el.influencer == true
        }
        //return the item which contains the user input
        else {
            var a = false;
            for(let i = 0; i < props.items.length; i++){
                if(el.influencer == true){
                    if(el.followers[i] == true){
                        a = a | (props.items[i].country.toLowerCase().includes(props.country))
                    }
                }
            }
            return (el.firstName.toLowerCase().includes(props.input) || el.lastName.toLowerCase().includes(props.input)) && el.typeofinfluencer == props.type && el.influencer == true && (a == true || el.country.toLowerCase().includes(props.country))
        }
    })

    const [currentPageF, setCurrentPageF] = useState(1);

    const onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        

            
        
        
    
        setCurrentPageF(currentPage);
      }


      const totalInfluencers = filteredData.length;

      const headerClass = ['text-dark py-2 pr-4 m-0', currentPageF ? 'border-gray border-right' : ''].join(' ').trim();

    return (
        <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalInfluencers}</strong> Influencers
              </h2>
              { currentPageF && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Página <span className="font-weight-bold">{ currentPageF }</span> / <span className="font-weight-bold">{ Math.ceil(filteredData.length/5) }</span>
                </span>
              ) }
            </div>
            <div className="d-flex flex-row py-4 align-items-center">{console.log("fd ", filteredData.length)}
              <Pagination totalRecords={filteredData.length} pageLimit={5} pageNeighbours={2} onPageChanged={onPageChanged} />
            </div>
          </div>
        <ul>
            {filteredData.slice((currentPageF-1)*5, (currentPageF-1)*5+5).map((item) => {return(
                <li key={item.id}>{item.firstName} {item.lastName}: {item.typeofinfluencer}. De {item.country}
                <h3>Seguidores:</h3>
                {item.influencer == true ? <ListofFollowers items = {props.items} followers = {item.followers}/> : <div></div>}
                
                </li>
                
            )})}
        </ul>
        </div>
        </div>
    )
}

export default List