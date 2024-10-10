import React, { useRef } from 'react'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { Slide } from 'react-awesome-reveal';
import { FaGraduationCap } from "react-icons/fa6";


let clients = [
  {
    name: "John Michel",
    position: "web developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
  },
]

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => (
    <ClientSlider item={item} key={i} />
  ))
  return (
      <Dcontainer id='education'>
        <Slide direction="left">
          <span className="green"></span>
          <h1>Education</h1>
        </Slide>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Slide direction="up">
           <div className='cap'>
              <span className='green'><FaGraduationCap /></span>
           </div>
        </Slide>
        <Slide direction="right">
           <div className=''>
              <h1>Bachelor of Science (B.S.) - Computer Science</h1>
              <h3 className='green'>George Mason University</h3>
              <h5>2012 - 2016</h5>
           </div>
        </Slide>
        </div>
      </Dcontainer>
  )
}

export default Clients

const Dcontainer = styled.div`
    
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    @media(max-width:840px){
        width: 90%;
    }
    .cap{
         font-size: 12rem;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
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