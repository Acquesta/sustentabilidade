import './hotebar.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";


export default function HoteBar(){
    return(
        <div>
            <div className="HoteBar">
                <ul>
                    <li><img src="" alt="" /></li>
                    <li><a className='HoteBar__a' href="/">Home</a>&nbsp;&nbsp;&nbsp;</li>
                    <li><a className='HoteBar__a' href="/sobre">Como funciona</a>&nbsp;&nbsp;&nbsp;</li>
                    <li><a className='HoteBar__a' href="/contato">Contato</a></li>
                </ul>
            </div>
        </div>
    )
}