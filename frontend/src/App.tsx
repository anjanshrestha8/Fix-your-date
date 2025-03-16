import React, { StrictMode, useState } from "react";
import { Box, Button, InputBase,TextField } from "@mui/material";

const App = () =>{

  const [newTask,setNewTask] = useState("");


const tasks = [
  {
    id: 12,
    task: "this is task1",
    isComplete: false,
  },
  {
    id: 13,
    task: "this is task2",
    isComplete: false,
  },
  {
    id: 14,
    task: "this is task3",
    isComplete: false,
  }
];

const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{ console.log(event.target.value)}

return (
  <>
    <Box>
      {/* input field */}
      <Box>
        <TextField  
          label="Enter you want to fix you date" 
          variant="outlined"
          autoFocus={true}
          color="primary"
          fullWidth={true} 
          onChange={handleOnchange}
        />
      </Box>
      {/* button */}
      <Box>
        <Button 
          variant="contained"
          color="secondary" 
          disabled={false} 
          fullWidth={true}
          onClick={()=>{console.log("click vayo")}}
        >
          Add your date
        </Button>
      </Box>
      {/* ouput */}
      <Box>
        {tasks?.map((task,index)=>{
          return(
            <>
              <Box key={index}>
                <Box>{task.task}</Box>
              </Box>
            </>
          )

        })}

      </Box>
    </Box>
  </>
)

}
export default App;


