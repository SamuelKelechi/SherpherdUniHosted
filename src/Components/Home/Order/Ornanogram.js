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
                        <span><ArrowRightSharpIcon/>Esep_Le Berger(Principal partner of Great Shepherd University)<br/>President/Founder_Prof Germain Ganlonlon</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Vice Chancellor_ Ndien Augustine P</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Acting Registrar- Dr.Akande</span>
                        <span><ArrowRightSharpIcon/>Esep _Le Berger / Great Shepherd University<br/>Dean , Student Affairs_ Alexis Agbessi</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Consultant,Internal relations & Political  Science</span>
                    </Card>
                    <Card>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Dean , Research & Grants_Mr Onoja Bernard</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University Head, Student Drive Mobilisation <br/> &Admission Processing Unit/Librarian _ Miss Oyefusi Ayomide</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University <br/>Exams & Records / Bursary _ Sister Priscilla Mbaegbu</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University Confidential  <br/>Secretary _Miss Ndien Blessing Assistant Secretary _Miss Daramola Oluwakemi</span>
                        <span><ArrowRightSharpIcon/>Great Shepherd University <br/>Food Services Department _ Mrs Ndien Obioma</span>
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
`
const Header = style.div`
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: 700;
    color:#00243A ;
`
const Wrapper = style.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
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