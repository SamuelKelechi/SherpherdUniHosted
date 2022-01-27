import React from 'react'
import styled from 'styled-components'
import img from "./img/back.jpg"
import flag from "./img/flag1.png"
import flag2 from "./img/flag2.jpg"
import flag3 from "./img/flag3.png"
import flag4 from "./img/flag4.jpg"

function For() {
  return (
    <Container>
      <Wrapper>
        {/* <Allflag>
          <Flag>
            <img src={flag}/>
          </Flag>
          <Flag>
            <img src={flag2}/>
          </Flag>
          <Flag>
            <img src={flag3}/>
          </Flag>
          <Flag>
            <img src={flag4}/>
          </Flag>

        </Allflag> */}
        <Title>FOREIGN PARTNERS(AFFILIATED UNIVERSITIES)/INSTITUTIONS</Title>
        <br/>
        {/* <Arr>Accredited course through affiliation with forign partner universities in Cameroon, France<br/>
        ************************
        </Arr> */}
       
        <Text>
          <span>1.Esep le Berger Universite, Benin Republic</span>
          <span>2.Bamenda University of Science and Technology (BUST)</span>
          <span>3.University of Yaounde, Cameroon</span>
          <span>4.International University of Bamenda, Cameroon</span>
          <span>5.The Institute of Entrepreneurs, Nigeria</span>
          <span>6.Merchant Marine Training Academy Apapa, Lagos, Nigeria</span>
          <span>7.The Chartered Institute of Administration, Nigeria</span>

        </Text>
        
      </Wrapper>
    </Container>
  )
}

export default For

const Text = styled.div`
display: flex;
flex-direction: column;
width: 40%;
font-size: 15px;

color: white;
text-align: center;
@media screen and (max-width: 425px){
  width: 90%;
}

`


const Arr = styled.div`
width: 30%;
height: auto;
text-align: center;
color: white;

@media screen and (max-width:425px){
  width: 70%;
height: auto;
text-align: center;

color: white;

}

@media screen and (max-width:375px){
  width: 80%;
height: auto;
text-align: center;

color: white;
}

@media screen and (max-width:320px){
  width: 90%;
height: auto;
text-align: center;

color: white;
}
`

const Title = styled.div`
width: 70%;
height: auto;
display: flex;
justify-content:center;
align-items: center;
color: white;
font-weight: 400;
font-size: 30px;
margin-top: 5px;

@media screen and (max-width:1024px){
  width: 90%;
  font-size: 40px;
  text-align: center;
  
}

@media screen and (max-width:425px){
  width: 90%;
  font-size: 27px;
  text-align: center;
  
}
@media screen and (max-width:375px){
  width: 90%;
  font-size: 24px;
  text-align: center;

  
}
@media screen and (max-width:320px){
  width: 90%;
  font-size: 20px;
  text-align: center;
}

`


const Flag = styled.div`
height: 80px;
width:80px;
background-color: pink;
border-radius: 50%;
border: 2px solid white;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;


img{
height: 80px;
width:80px;
border-radius: 50%; 
object-fit: cover;

}

@media screen and (max-width:425px){
height: 55px;
width:55px;
background-color: pink;
border-radius: 50%;
border: 2px solid white;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;


img{
height: 55px;
width:55px;
border-radius: 50%; 
object-fit: cover;

}
}
`

const Allflag = styled.div`
width: 28%;
height: auto;
display: flex;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content:space-between;

@media screen and (max-width:1024px){
  width: 70%;
height: auto;

display: flex;
/* align-items: center;
justify-content:center */
}

@media screen and (max-width:425px){
  width: 65%;
height: auto;

display: flex;
/* align-items: center;
justify-content:center */
}

@media screen and (max-width:375px){
  width: 70%;
height: auto;

display: flex;
/* align-items: center;
justify-content:center */
}

@media screen and (max-width:320px){
  width: 80%;
height: auto;

display: flex;
/* align-items: center;
justify-content:center */
}


`

const Container = styled.div`
width: 100%;
// height: 400px;
/* background-image: url(${img}); */
background-repeat: repeat-y;
background-size: cover;
`
const Wrapper = styled.div`

width: 100%;
padding: 30px 0;
// height: 400px;
background-color: #7f5a83;
background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
/* opacity: 0.9; */
display: flex;
justify-content:center;
align-items: center;
display: flex;
flex-direction: column;
`

