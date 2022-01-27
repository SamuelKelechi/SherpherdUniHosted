import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import { Table } from '@mui/material';
import Data from "./Data.json"
import {makeStyles, createStyles} from "@mui/styles"
import { fontWeight } from '@mui/system';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiDataGrid-columnHeaders":{
        backgroundColor:"#0082cb",
        color: "white"
      },
        "& .MuiDataGrid-row": {
          backgroundColor:"#b0c8e2",
          color: "Black",
          fontWeight:"700",
          "&:nth-child(2n)": { backgroundColor: "#e3edfc" }
        },
     
    }
  })
);

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'S/n', headerName: 'S/N', width: 60, headerClassName: 'headed', },
  { field: 'Details', headerName: 'DETAILS', width: 250 },
  { field: 'Naira', headerName: 'NAIRA', width: 230 },
  { field: 'Remarks', headerName: 'REMARKS', width: 230 },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];



function Card() {
  console.log(Data);
  const classes = useStyles()
  return (
    <Container>
      <Wrapper>
        <Title>FEE STRUCTURE FOR ENTRY WITH ABE/ICM (Advanced Diploma Level 6)  PROGRAM</Title>
        <Tablecon>
        <DataGrid
        rows={Data}
        columns={columns}
        pageSize={18}
        rowsPerPageOptions={[5]}
        className={classes.root}
      
      />
        </Tablecon>
        
      </Wrapper>
    </Container>
  )
}

export default Card

const Title = styled.div`
margin-bottom: 10px;
font-weight:700;
font-size:25px;

@media screen and (max-width:425px){
  font-size:15px;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
}
`



const Tablecon = styled.div`
height: 1050px;
width: 80%;

@media screen and (max-width:760px){
  width: 90%;
}
`

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:center;

`
const Wrapper = styled.div`
width: 100%;
flex-direction: column;
margin-top: 50px;
display: flex;
justify-content:center;
align-items: center;




`
