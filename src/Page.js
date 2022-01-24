import React from 'react';
import data from './texto.json'
import tapa from './img/tapa.png';
import {Text, Options} from './Options'

const databook = data.book

const PageText = (props) => {
    return (
        < Text 
        page = {props.pagetext}
        text = {databook[props.pagetext].text.replace(new RegExp('\n', 'g'), '<br/>')}
        tapa = {tapa}
        />
    )
}


const PageOptions = (props) =>{
    const rows = []

    for (let i = 0; i < databook[props.pages].options.length; i++){
        rows.push(
        < Options 
        click = {props.click}
        value = {i+1}
        name = {databook[props.pages].page[i]}
        options = {databook[props.pages].options[i]}
        />
        )
    }
    return (<>{rows}</>)
}


export {PageText, PageOptions};