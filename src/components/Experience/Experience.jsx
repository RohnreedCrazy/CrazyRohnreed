import React from 'react'
import styled from 'styled-components'
import ExperienceSlider from './ExperienceSlider';
import { Slide } from 'react-awesome-reveal';
import homeLogo from "../../Assets/home-main.svg"
import About from "../../Assets/about.png";

let experiences = [
    {
        name: "freeLancer Developer",
        position: "07/2021-present",
        disc: `       * Developed a brand new administration panel for purchasing agent business, which in creased the customer service by 90% and improved the efficiency of operating by over 25%.
        * Ensured compatibility with major browsers on mobile and desktop platforms by coordinatingcore server product development in MERN Stack.
        * Developed and structured feature-rich client websites, ensuring that all needs were me tand company policies and procedures followed; created high-quality code.
        * Collaborated with project managers and creative teams to deliver original, efficient solutions advised clients and provided expertise.
        * Work as a team member of web and mobile and blockchain technology solution.
        * Complete detailed programming and development tasks for front end public and internal websites as well as challenging back-end server code.`
    },
    {
        name: "fullStack Developer",
        position: "11/2016 - 07/2021",
        disc: `        * Design user-friendly websites with React including optimized check-out page, resulting in a 25% increase in user clicks and subsequently 33% in customer purchases.
        * Developed a original e-commerce websites with JS frameworks like React and Express.
        * Participated in weekly meetings with executives, supported brainstorming and ideageneration. Responsible for API design and development of REST API.
        * Collaborated with the team to design, structure, and implement new websites from start to finish; updated existing websites.
        * Increased ratings by an average of over 20% annually through optimizing performance and delivery of resources using Webpack.
        * Designed, developed, and modified 30+ software systems and custom components.
        * Developed 30+ new software solutions by analyzing system performance standards.
        * Analyzed systems flow, data usage, and work processes; investigated 100% of problem areas.
        * Developed and executed 300+ test procedures for user interfaces, back-end processing, connectivity, and relational database interactions.`
    }
]

const Experiences = () => {
    let exDisc1 = "";
    let exDisc2 = "";
    exDisc1 = experiences[0];
    exDisc2 = experiences[1];
    return (
        <Container id='experience'>
            <Slide direction="left">
                <span className="green">These are My</span>
                <h1>Experiences</h1>
            </Slide>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Slide direction="left">
                    <ExperienceSlider item={exDisc1} />
                </Slide>
                <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px", marginTop:'100px', marginLeft:"20px" }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <img
                    src={About}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "320px", marginTop: '200px',marginRight:"20px" }}
                />
                <Slide direction="right">
                    <ExperienceSlider item={exDisc2} />
                </Slide>
            </div>

        </Container>
    )
}

export default Experiences

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        // text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }

`