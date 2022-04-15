import React from 'react';
import styled from 'styled-components';
import pix from "./ImageFile/img.jpg";
import {Link} from 'react-router-dom';


const QuickStart = () => {
    return (
        <Container>
            <Content>
                <ImaheHolder>
                    <Image src={pix}/>

                </ImaheHolder>
                <TextHolder>
                    <Tittle>Know Facts About us </Tittle>
                    <OtherText>
                        The Great Shepherd University provides the opportunity for interactive activities with students of affiliated Universities in Africa and other parts of the world.
                        We are focused on creating genuine graduates equipped with distinctive academic and professional competencies .
                        <br />
                        <br />
                        The Great Shepherd University (ESEP-LE BERGER) PORTO NOVO Republic of Benin is a private institution established by Law. It has an operational license given by the government of Benin Republic and has graduated several sets since its establishment in 1999. The University is therefore calling for application from suitably qualified candidates for admission into Diploma, Degree and Postgraduate Degrees.
                        <br />
                        <br />
                        Our fees are affordable and we also offer scholarship to eligible candidates that meets up our criteria. To know if you are eligible for our scholarship scheme, you can read on our criteria <Link to="/schoolarship" style={{color:"red"}}>here...</Link>
                    </OtherText>
                </TextHolder>

            </Content>
            
        </Container>
    )
}

export default QuickStart

const Container = styled.div`
    // height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    margin-top: 10px;

    @media screen and (max-width:768px){
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
}

    @media screen and (max-width: 425px){
        margin-top: 70px;

    }
`

const Content = styled.div`
    // height: 500px;
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 650px){
        width: 100%;
    }
`

const ImaheHolder = styled.div`
    width:500px;
    height: 400px;
    margin: 30px;

    @media screen and (max-width: 780px){
        width: 400px;
    }

    @media screen and (max-width: 425px){
        width:95%;
        height: 300px;
        display: flex;
        justify-content: center;
        margin-top: -180px;
    }
`
const Image = styled.img`
    width:500px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;

    @media screen and (max-width: 780px){
        width:100%;
    }

    @media screen and (max-width:425px){
    width:100%;
    height: 200px;
    object-fit: cover;
    }
`

const TextHolder = styled.div`
    margin: 30px;
    flex-direction: column;
    align-items: center;
    width:500px;
    height: auto;
    line-height: 1.5rem;
    text-align: start;
    display: flex;

    @media screen and (max-width: 425px){
        width: 95%;
        margin-top: -100px

    }
`
const Tittle = styled.div`
    text-transform: capitalize;
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width:768px){
    font-size: 20px;
    }
`

const OtherText = styled.div`
    margin-top: 20px;

    @media screen and (max-width: 768px){
    text-transform: capitalize;
    margin-bottom: 10px;
    font-size: 12px;
    width: 90%;
    margin-top: 10px;
    text-align: center;
    }

    @media screen and (max-width: 430px) {
        width: 95%;
    }
`