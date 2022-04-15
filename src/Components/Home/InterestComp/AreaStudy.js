import React from 'react'
import styled from 'styled-components'
import pix1 from "./ImageFile/1.jpg"
import pix2 from "./ImageFile/2.jpg"
import pix3 from "./ImageFile/3.jpg"
import pix4 from "./ImageFile/4.jpg"
import pix5 from "./ImageFile/5.jpg"
import pix6 from "./ImageFile/6.jpeg"



const AreaStudy = () => {
    return (
        <Container>
            <Content>
                <FirstText>
                    <Line/>
                        <Text>Area of Study</Text>
                    <Line/>

                </FirstText>
                <Interest>What are you interested in?</Interest>

                <BoxHolder>
                    <Box>
                        <Image src={pix6}/>
                        <Text2>Arts, Media & <br/> communication</Text2>
                    </Box>
                    <Box>
                    <Image src={pix1}/>

                    <Text2>Computer Science</Text2>

                    </Box>
                    <Box>
                    <Image src={pix2}/>

                    <Text2>Economics, Banking & Finance</Text2>

                    </Box>
                </BoxHolder>
                <BoxHolder1>
                    <Box>
                    <Image src={pix3}/>

                    <Text2>Linguistics (French & English, <br/>Interpretation & Translation)</Text2>


                    </Box>
                    <Box>
                    <Image src={pix4}/>

                    <Text2>Transport & Logistics Management</Text2>

                    </Box>
                    <Box>
                    <Image src={pix5}/>

                    <Text2>Mathematics & <br/> Physical Sciences</Text2>

                    </Box>
                </BoxHolder1>
            </Content>
        </Container>
    )
}

export default AreaStudy

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
font-family: poppins;
`

const Content = styled.div`
width: 80%;
background-color: whitesmoke;
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 0 50px 0
`

const FirstText= styled.div`
margin-top: 20px;
height: 40px;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
`
const Line= styled.div`
border: 1px solid #EF9f26;
width: 30px;
`
const Text= styled.div`
font-size: 15px;
font-weight: bold;
`

const Interest = styled.div`
font-size: 30px;
color: #D7192B;
font-weight: bold;
text-transform: uppercase;

@media screen and (max-width:768px){
font-size: 15px;
color: #D7192B;
font-weight: bold;
text-transform: uppercase;
}
`

const BoxHolder = styled.div`
width: 80vw;
margin-top: 20px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;

@media screen and (max-width: 430px){
    width: 100%;
}
`

const Box = styled.div`
height: 200px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
margin: 10px;

@media screen and (max-width: 430px){
    width: 90%
}

`

const Image = styled.img`
height: 200px;
width: 300px;
object-fit: cover;
background-color: black;
opacity:30%;

@media screen and (max-width: 430px) {
    width: 100%
}
`
const BoxHolder1 = styled.div`
width: 80vw;
margin-top: 20px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;

@media screen and (max-width: 430px){
    width: 100%;
}
`

const Text2 = styled.div`
position: absolute;
font-weight: bold;
width:300px ;
display: flex;
justify-content: center;
align-items: center;
text-transform: capitalize;
color: white;
text-align: center;

@media screen and (max-width:430px){
    width: 90%
}

`