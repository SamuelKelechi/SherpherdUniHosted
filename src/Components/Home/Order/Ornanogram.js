import React from 'react';
import style from 'styled-components'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';


const Ornanogram = () => {
    return(
        <>
            <Container>
                <Header>
                    Order of Organogram
                </Header>
                <Wrapper>
                    <Card>
                        <span><ArrowRightSharpIcon/>Esep Le Berger(Principal partner of Great Shepherd University)<br/>President/Founder - Prof Germain Ganlonlon</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Vice Chancellor - Ndien Augustine P</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Acting Registrar - Dr.Akande</span>
                        <span><ArrowRightSharpIcon/>Esep _Le Berger / Great Shepherd University<br/>Dean , Student Affairs - Alexis Agbessi</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Consultant - Mr Alex Balogun</span>
                    </Card>
                    <Card>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Dean , Research & Grants - Mr Onoja Bernard</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University Head, Student Drive Mobilisation <br/> & Admission Processing Unit/Librarian - Miss Oyefusi Ayomide</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University <br/>Exams & Records / Bursary - Sister Priscilla Mbaegbu</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University Confidential  <br/>Secretary - Miss Ndien Blessing / Assistant Secretary - Miss Daramola Oluwakemi</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University <br/>Food Services Department - Mrs Ndien Obioma</span>
                    </Card>
                </Wrapper>
            </Container>
        </>
    )
}

export default Ornanogram

const Container = style.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: lightgrey;
    padding: 15px 0 30px 0;
    margin-top: 20px;
    // font-weight: bold;
    color: white;
    padding: 40px 0 50px 0;
    background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
`
const Header = style.div`
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 700;
`
const Wrapper = style.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-around;

    @media screen and (max-width: 425px){
        width: 100%
    }
`
const Card = style.div`
    width: 500px;
    height: 280px;
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
        display: flex;
        align-items: flex-start;
        
        @media screen and (max-width: 425px){
            margin-top: 5px;
        }
    }

    @media screen and (max-width: 425px){
        width: 95%;
        height: auto;
    }
`