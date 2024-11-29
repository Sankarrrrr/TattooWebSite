import "./home.css";
import React from "react";
import master from "./master.png";
import Cards from "./cards.js";
import inst from "./inst.svg"
import vk from "./vk.svg"
import telegram from "./telegram.svg"

 
class home extends React.Component {
    render()    {
        return(
            <div class="backgr">
                <nav>
                    <div class="logo">
                    SILVERNA
                    </div>
                    <div class="links">
                        <a href="/">Home</a>
                        <a href="/portfolio">Portfolio</a>
                    </div>
                </nav>
                <section class="AboutS">
                    <div class="AboutP">
                       <img src={master}></img>
                    </div>
                    <div class="AboutA">
                    <p><h1>Обо мне</h1>
                    <br/>Тату мастер - это талантливый и профессиональный специалист, 
                    способный превратить самые смелые идеи клиента в уникальные и 
                    красивые работы искусства на коже. Они обладают умением слушать и 
                    понимать пожелания своих клиентов, предлагать им креативные идеи и 
                    воплощать их в жизнь с помощью высококачественных материалов и 
                    техники. Тату мастеры также обладают высоким уровнем 
                    профессионализма и ответственности, следя за безопасностью и гигиеной 
                    при выполнении каждой работы. Они создают не просто татуировки, а 
                    настоящие произведения искусства, которые будут радовать своих 
                    владельцев долгие годы.<br/>
                    <h2>Мои контакты</h2>
                    <a href="https://www.instagram.com/heysilverna?igsh=MTF0dWowdmE1dTVhaA==" target="_blank" rel="noreferrer noopener"><img src={inst}></img></a>
                    <a href="https://vk.com/silvernaa?clckid=03bc0377" target="_blank" rel="noreferrer noopener"><img src={vk}></img></a>
                    <a href="https://t.me/s1lverna" target="_blank" rel="noreferrer noopener"><img src={telegram}></img></a>
                    </p>
                    </div>
                </section>
                <div class="unique"><p><h1>Уникальные эскизы</h1></p></div>
                <Cards/>
                <footer>    
                    <h1>© 2024 SILVERNA</h1>
                </footer>
            </div>
       )
    }
}

export default home;