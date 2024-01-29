import { TextField } from "@mui/material";
import React from "react"
type Props = {
    name:string;
    type:string;
    label:string;
}
const CustomizedInput = (props:Props) => {
  return (
   <TextField  Input name={props.name} label={props.label} type={props.type}/>
  );
}

export default CustomizedInput