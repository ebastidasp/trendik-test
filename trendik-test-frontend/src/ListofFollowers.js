import { React, useState } from 'react'

function ListofFollowers(props) {

    //create a new array by filtering the original array
   
    var filteredData = []

    for(let i = 0; i < props.items.length; i++){
        if(props.followers[i] == true ){
            filteredData.push(props.items[i])
        }
    }


    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.firstName} {item.lastName}: {item.influencer == true ? item.typeofinfluencer : "No es influencer"}. De {item.country}
                
                </li>
                
            ))}
        </ul>
    )
}

export default ListofFollowers