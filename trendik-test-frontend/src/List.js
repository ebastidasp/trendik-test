import { React, useState } from 'react'
import ListofFollowers from './ListofFollowers'

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
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.firstName} {item.lastName}: {item.typeofinfluencer}. De {item.country}
                <h3>Seguidores:</h3>
                {item.influencer == true ? <ListofFollowers items = {props.items} followers = {item.followers}/> : <div></div>}
                
                </li>
                
            ))}
        </ul>
    )
}

export default List