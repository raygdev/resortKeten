import rinja from "../assets/mt-rinja.jpg"
import './Landing.css'


export default function Landing(){
    return(
        <div className="body">
            <a href="https://en.wikipedia.org/wiki/Mount_Rinjani" target="_blank">
            <img src={rinja} className="rinja" />
            </a>
        </div>
    )
}