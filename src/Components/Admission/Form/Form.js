import React from 'react'
import style from 'styled-components'


const Form = () => {
    return(
        <MainContainer>
            <h2>ADMISSION FORM</h2>
            <Header>Please, fill correctly the right informations</Header>
            <FormHolder>
                A. STUDENT BIO DATA
                <input placeholder='Surname'/>
                <input placeholder='Other Names'/>
                <span>
                    Date of Birth:<input placeholder='Date of Birth' type="date"/>
                    <label for="sex">Sex:</label>
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
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

const FormHolder = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 20px 0;
    background-color: lightgrey;
    width: 500px;
    border-radius: 5px;
    margin-top: 15px;

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