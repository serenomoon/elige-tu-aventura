import React from 'react';
import upleftborder from './img/upleft-border.png'
import uprightborder from './img/upright-border.png'
import downrightborder from './img/downright-border.png'
import downleftborder from './img/downleft-border.png'

const Text = (props) => {
    if (props.text !== ""){
        return (<div className="fondo-texto">
            <img className="upleft-border" src={upleftborder} alt="upleftborder"></img>
            <img className="upright-border" src={uprightborder} alt="uprightborder"></img>
            <img className="downleft-border" src={downleftborder} alt="downleftborder"></img>
            <img className="downright-border" src={downrightborder} alt="downrightborder"></img>
            
            <div id="texto-pagina" dangerouslySetInnerHTML={{__html: props.text}}/>
            </div>)
    }else{
        return (<img src={props.tapa} id="tapa" alt="cover"></img>)}
}



const Options = (props) => {
    return (
        <div className="buttons-inside">
            <input className="button" type="button" onClick={props.click} value={props.value} id={props.name}></input>
            <label className="control-label">{props.options}</label>
        </div>
        )
    }



export {Options , Text};