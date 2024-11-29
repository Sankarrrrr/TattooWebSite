import "./home.css";
import React from "react";
import Cards from "./cards.js";


class portfolio extends React.Component {
    render(){
        return(
            <div class="backgr">
                <nav>
                    <div class="logo">
                    SILVERNA
                    </div>
                    <div class="links">
                        
                        <a href="/home">Home</a>
                        <a href="/">Portfolio</a>
                    </div>
                </nav>
                <div class="unique"><p><h1>Мои предыдущие работы</h1></p></div>
                <Cards/>
                <footer>    
                    <h1>© 2024 SILVERNA</h1>
                </footer>
            </div>
       )
    }
}

export default portfolio;