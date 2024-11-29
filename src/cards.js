import "./home.css"
import deal1 from "./deal1.png";
import deal2 from "./deal2.png";
import deal3 from "./deal3.png";
import deal4 from "./deal4.png";
import deal5 from "./deal5.png";
import deal6 from "./deal6.png";
import deal7 from "./deal7.png";
import deal8 from "./deal8.png";
import React from "react";

class Cards extends React.Component {
    render()
    {
        return(

            <div class="cards">
            <div class="card">
                <a href="https://clck.ru/39Ch2Y"><img src={deal1}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39Chff"><img src={deal2}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39Chki"><img src={deal3}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39CjPV"><img src={deal4}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39CjdD"><img src={deal5}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39CjgL"><img src={deal6}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39Cjhs"><img src={deal7}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39Cjvb"><img src={deal8}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39Cjvb"><img src={deal8}></img></a>
            </div>
            <div class="card">
                <a href="https://clck.ru/39Cjvb"><img src={deal8}></img></a>
            </div> 
        </div>)
    }   
}
export default Cards