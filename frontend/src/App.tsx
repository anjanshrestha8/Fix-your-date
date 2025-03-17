import React, { StrictMode, useState } from "react";
import { Box, Button, InputBase,TextField } from "@mui/material";

const App = () =>{

  const [newTask,setNewTask] = useState("");
  const [tasks,setTask] = useState([{
    task: "this is task1",
  },
  {
    task: "this is task2",
  },
  {
    task: "this is task3",
  }])


const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{ setNewTask(event.target.value)}
console.log(newTask)
const handelOnAdd = () => {

  setTask([...tasks,{task:newTask}])
}

console.log(tasks);

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
          onClick={handelOnAdd}
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


