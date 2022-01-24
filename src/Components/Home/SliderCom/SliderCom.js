import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"
import img1 from "./img/1.jfif"
import img2 from "./img/2.jfif"
import img3 from "./img/3.jfif"
import img4 from "./img/4.jfif"
import img5 from "./img/5.jfif"
import img6 from "./img/6.jfif"
import img7 from "./img/7.jfif"
import img8 from "./img/8.jfif"
import img9 from "./img/9.jfif"

function SliderCom() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <Container>
        <span>Our Recent Graduate</span>
        <br/>
        <Wrapper>
        <Slider {...settings}>
          <Card>
            <CC>
              <Imgcon src={img1}></Imgcon>
              <NameCon> <Dn>Name</Dn>  : Adebayo Nike</NameCon>
             
              <Decs> AT NYSC KOGI CAMP, KOGI STATE. </Decs>
            </CC>
           
          </Card>
          
          <Card>
          <CC>
          <Imgcon src={img2}></Imgcon>
          <NameCon> <Dn>Name</Dn>  : Obia Wisdom</NameCon>

              <Decs>  AT NYSC BAYELSA CAMP, BAYELSA STATE.</Decs>
          </CC>
          </Card>
          
          {/* <Card>
          <CC>
          <Imgcon src={img3}></Imgcon>
          <NameCon> <Dn>Name</Dn>  : Jimoh ABDULMUJEEB.O</NameCon>
              <Ema><Dn>Year of Graduatation</Dn>: 2017</Ema>
              <Ema> <Dn>Department</Dn>: Comp. Science</Ema>
              <Decs> <Dn>Current status </Dn>: Currently Serving </Decs>
          </CC>
          </Card> */}
          
          {/* <Card>
          <CC>
          <Imgcon src={img4}></Imgcon>
              <NameCon> <Dn>Name</Dn>  : JIMOH ABDULMUJEEB.O</NameCon>
              <Ema><Dn>Year of Graduatation</Dn>: 2017</Ema>
              <Ema> <Dn>Department</Dn>: Comp. Science</Ema>
              <Decs> <Dn>Current status </Dn>: Currently Serving </Decs>
          </CC>
          </Card> */}
          
          <Card>
          <CC>
          <Imgcon src={img5}></Imgcon>
          <NameCon> <Dn>Name</Dn>  : Adeola Jayeola</NameCon>
              <Decs><Dn>Year of Graduatation</Dn>: 2017</Decs>
              <Decs><Dn>Present Location</Dn>: Lagos</Decs>
              <Decs> <Dn>Current status </Dn>:  Employed </Decs>
          </CC>
          </Card>
          
          <Card>
          <CC>
          <Imgcon src={img6}></Imgcon>
          <NameCon> <Dn>Name</Dn>  :Naomi</NameCon>
             
              <Decs>  AT NYSC ABAKALIKI CAMP, EBONYI STATE </Decs>
          </CC>
          </Card>
          
          <Card>
          <CC>
          <Imgcon src={img7}></Imgcon>
          <NameCon> <Dn>Name</Dn>  : Oluwamu ayowabami</NameCon>
              
              <Decs>AT NYSC UMUAHIA CAMP, ABIA STATE </Decs>
          </CC>
          </Card>
          
          <Card>
          <CC>
          <Imgcon src={img8}></Imgcon>
          <NameCon> <Dn>Name</Dn>  : ODUOLA AYOMIDE</NameCon>
              <Decs><Dn>Year of Graduatation</Dn>: 2017</Decs>
              
              <Decs> <Dn>Current status </Dn>: Software Developer </Decs>
          </CC>
          </Card>

          <Card>
          <CC>
          <Imgcon src={img9}></Imgcon>
          <NameCon> <Dn>Name</Dn> : JIMOH ABDULMUJEEB.O</NameCon>
              <Decs>AT NYSC KEFFI CAMP, NASARAWA STATE. </Decs>
          </CC>
          </Card>
          
          
          
         
        </Slider>
        </Wrapper>
      </Container>
  )
}

export default SliderCom

const Dn = styled.div`
color: #00243A;
font-weight: 600;
font-size:13px;

@media screen and (max-width:760px){
  font-size:15px;
})
`

const Imgcon = styled.img`
 height: 400px;
 width: 300px;

 object-fit:cover;
 display: flex;
 justify-content:center;
 align-items: center;
`
const NameCon = styled.div`
display: flex;
font-size:15px;
height: 25px;
width: 100%;
font-weight: 500;
color: #4A628D;
padding-left: 10px;

@media screen and (max-width:760px){
  font-size: 15px;
  padding-left: 5px;
}



`
const Ema = styled.div`
display: flex;
font-size:18px;
height: 25px;
width: 100%;
padding-left: 10px;
font-weight: 500;

color: #4A628D;

@media screen and (max-width:760px){
  font-size: 15px;
  padding-left: 5px;
}
`
const Decs = styled.div`
display: flex;
font-size:12px;
height: 25px;
width: 100%;
font-weight: 500;
padding-left: 7px;
padding-top: 0px;
padding-bottom: 0px;
color: #4A628D;

@media screen and (max-width:760px){
  font-size: 15px;
  padding-left: 5px;
}
 

`

const CC = styled.div`
width: 340px;
height: 540px;
background-color: #F2F3F6;
display: flex;
flex-direction: column;
line-height:18px;


@media screen and (max-width:600px){
  width: 320px;
}



`

const Card = styled.div`
width: 350px;
height: 480px;
background-color: #00243A;
display: flex;
justify-content:center;
align-items: center;
padding: 20px;

@media screen and (max-width: 760px) {
  padding: 0px;
}

`

const Container = styled.div`
width: 100%;
height: 700px;
background-color: #00243A;
display: flex;

align-items: center;
flex-direction: column;
padding-top: 20px;
padding-bottom: 20px;
margin-top: 30px;

span{
  color: #F2F3F6;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
}

@media screen and (max-width:600px){
 span{
   font-size:25px;
 }
}

`
const Wrapper = styled.div`
 width: 75%;
 height: 400px;

 @media screen and (max-width:600px){
  width: 80%;
 }


`
