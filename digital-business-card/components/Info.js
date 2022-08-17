import React from "react"

export default function Info(){
    return (
        <div className="info">
            <img src="../images/profile.jpeg"/>
            <h1>Belen Carrion</h1>
            <p className="accent center">Web developer</p>
            <p className="center">
                <a className="portfolio" href="https://belencarrion.dev/" target="_blank">belencarrion.dev</a>
            </p>
            <div className="buttons">
                <a className="btn btn-primary" href="mailto:belencarriondev@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a className="btn btn-secondary" href="https://www.linkedin.com/in/belen-carrion/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> 
                    Linkedin
                </a>
            </div>
        </div>
    )
}