import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import { Grid, Paper, Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <Paper
        style={{
          height: "100vh",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container direction="column">
          <Typography variant="h4">My ToDo App</Typography>
          <TodoList />
        </Grid>
      </Paper>
    </>
  );
}

export default App;
