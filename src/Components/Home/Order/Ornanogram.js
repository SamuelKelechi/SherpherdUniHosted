import React from 'react';
import style from 'styled-components'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';


const Ornanogram = () => {
    return(
        <>
            <Container>
                <Header>
                    Order of Ornanogram
                </Header>
                <Wrapper>
                    <Card>
                        <span><ArrowRightSharpIcon/>Esep_Le Berger(Principal partner of Great Shepherd University)<br/>President/Founder_Prof Germain Ganlonlon</span>
                        <br/>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Vice Chancellor_ Ndien Augustine P</span>
                        <br/>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Acting Registrar- Dr.Akande</span>
                        <br/>
                        <span><ArrowRightSharpIcon/>Esep _Le Berger / Great Shepherd University<br/>Dean , Student Affairs_ Alexis Agbessi</span>
                        <br/>
                        <span><ArrowRightSharpIcon/>Great Shepherd University<br/>Consultant,Internal relations & Political  Science</span>
                    </Card>
                    <Card>
                        <span></span>
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
`
const Header = style.div`

`
const Wrapper = style.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-around;
`
const Card = style.div`
    width: 500px;
    // background-color: red;

    span{
        display: flex;
        align-items: flex-start;
    }
`