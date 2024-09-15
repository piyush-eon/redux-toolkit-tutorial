import React from "react";
import { Provider } from "react-redux";
import { Container, Typography, Box } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
import HabitStats from "./components/habit-stats";
import store from "./store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm />
          <HabitList />
          <HabitStats />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
