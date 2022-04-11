import React from 'react';
import style from 'styled-components';
import Button from '@mui/material/Button';


const Form = () => {
    return(
        <MainContainer>
            <h2>ADMISSION FORM</h2>
            <Header>Please, fill correctly the right informations</Header>
            <FormHolder>
                A. STUDENT BIO DATA
                <input placeholder='Surname' required/>
                <input placeholder='Other Names' required/>
                <span>
                    <b>Date of Birth:</b><input placeholder='Date of Birth' type="date" required/>
                    <label for="sex"><b>Sex:</b></label>
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </span>
                <span style={{display:"flex", width:"95%", justifyContent:"flex-start"}}>
                    <label for="birth"><b>Upload Birth Certificate:</b></label>
                    <br/>
                    <input type="file" style={{width:"250px"}} required/>
                </span>
                <input placeholder='Nationality'/>
                <input placeholder='Permanent Address'/>
                <input placeholder='Country'/>
                <input placeholder='Town/City'/>
                <input placeholder='Postal Address'/>
                <input placeholder='Email'/>
                <br/>
                B. CONTACT PERSON FOR URGENCY:
                <input placeholder='Name'/>
                <input placeholder='Telephone'/>
                <input placeholder='Email'/>
                <input placeholder='Address'/>
                <br/>
                C. SPONSOR
                <input placeholder='Name of Sponsor'/>
                <input placeholder='Occupation'/>
                <input placeholder='Telephone'/>
                <input placeholder='Relationship'/>
                <input placeholder='Address'/>
                <br/>
                D. CHOICE OF PROGRAMME
                <label>Select Your Choice of Program</label>
                <ProgHolder>
                    <option value="DIPLOMA" >DIPLOMA</option>
                    <option value="CERTIFICATE" >CERTIFICATE</option>
                    <option value="CONVERSION" >CONVERSION</option>
                    <option value="DIRECT ENTRY" >DIRECT ENTRY</option>
                    <option value="BACHELORS" >BACHELORS</option>
                    <option value="MASTERS">MASTERS</option>
                    <option value="Ph.D">Ph.D</option>
                </ProgHolder>

                <input placeholder='Course of Study' required/>
                <span style={{display:"flex", width:"95%", justifyContent:"flex-start"}}>
                    <label for="birth"><b>Upload O'Level Result:</b></label>
                    <br/>
                    <input type="file" style={{width:"250px"}} required/>
                </span>

                {/* <br />
                ACADEMIC QUALIFICATIONS */}

                <br/>
                CURRICULAR ACTIVITIES
                <input placeholder='Sporting Activities'/>
                <input placeholder='Hobby'/>
                <input placeholder='Other Interests'/>
                <br/>
                <ObligHolder>
                <b>OBLIGATION:</b>
                I do hereby pledge to abide by all the rules, regulations and Obligation
                governing the general conduct of studentship while studying in this University. In the
                case of my misconduct, indiscipline and or my falsification of documents submitted
                for this admission, I am aware that my admission shall be forfeited.
                </ObligHolder>
                <h5 style={{width:"95%"}}>
                NB: In order for your admission to be processed, kindly pay your admission
                fee, and send your prove of payment including other required documents to the 
                school official email: esepadmissions@gmail.com
                </h5>
                <br/>
                <input type="submit" style={{color:"white", cursor:"pointer", border:"1px solid whitesmoke", backgroundColor:"#03A84E"}}/>
                {/* <Button variant='outline' >SUBMIT</Button> */}

            </FormHolder>
        </MainContainer>
    )
}

export default Form

const MainContainer = style.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    font-weight: bold;

    h2{
        color: #00243A;
    }
`

const Header = style.div`
    color: #00243A;
    font-weight: bold;
    margin-top: -20px;
`

const FormHolder = style.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 20px 0;
    background-color: lightgrey;
    width: 500px;
    border-radius: 5px;
    margin-top: 15px;
    text-align: left;

    @media screen and (max-width: 425px){
        width: 95%
    };

    input{
        width: 90%;
        height: 35px;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        outline: none;
        font-size: 17px;
        margin-top: 10px;
        color: light-grey;
    };

    span{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: lighter;
      
        input{
            width: 30%;
        }
        select{
            height: 30px;
            margin-top: 10px;
            color: light-grey;
            border: none;
            width: 30%;
            outline: none;
            font-size: 17px;
            border-radius: 5px;
        }

        label{
            font-weight: lighter;
            // padding-right: 5px;
            margin-left: 10px;
        }
    }
`
const ProgHolder = style.select`
    width: 90%;
    height:40px;
    font-weight: bold;
    border: none;

    option{
        font-family: Poppins;
        font-weight: bold;
    }

    @media screen and (max-width: 425px){
        width: 100%
    }
`

const ObligHolder = style.div`
    width: 95%;
    font-weight: lighter;
`