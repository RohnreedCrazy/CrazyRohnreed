import React from "react";
import { GrNode } from "react-icons/gr"; 
import { GrReactjs } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { SiExpressvpn } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoVuejs } from "react-icons/bi";
import { SiPython } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { TbFileTypePhp } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { SiOracle } from "react-icons/si";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h3>
          My <span className="green">skills</span>
        </h3>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={GrNode}
            title={"Node.js"}
            disc={""}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={GrReactjs}
            title={"React.js"}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={SiExpressvpn}
            title={"Express.js"}
            disc={""}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon = {BiLogoVuejs}
            title ={"Vue.js"}
            disc = {""}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon = {TbBrandNextjs}
            title ={"Next.js"}
          />
        </Slide>
        <Slide direction="rigth">
          <Card
            Icon = {SiNuxtdotjs}
            title ={"Nuxt.js"}
            disc = {""}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon = {TbFileTypePhp}
            title ={"PHP"}
            disc = {""}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon = {TbBrandReactNative}
            title ={"ReactNative.js"}
            disc = {""}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon = {BiLogoMongodb}
            title ={"MongoDB"}
            disc = {""}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon = {BiLogoPostgresql}
            title ={"PostgreSQL"}
            disc = {""}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon = {SiMysql}
            title ={"MySQL"}
            disc = {""}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon = {IoLogoAndroid}
            title ={"Android"}
            disc = {""}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon = {SiPython}
            title ={"Python"}
            disc = {""}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon = {DiDjango}
            title ={"Django"}
            disc = {""}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon = {SiOracle}
            title ={"Oracle"}
            disc = {""}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon = {TbBrandTailwind}
            title ={"Tailwind CSS"}
            disc = {""}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
