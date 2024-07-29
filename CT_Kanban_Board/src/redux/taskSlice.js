import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [
    {
      id: 1721907160910,
      title: "task 1",
      desc: "Not started task 1 description",
      date: "2024-07-30",
      status: "Not Started"
    },
    {
      id: 1721907160911,
      title: "task 2",
      desc: "Not started task 2 description",
      date: "2024-07-30",
      status: "In Process"
    },{
      id: 1721907160912,
      title: "task 3",
      desc: "Not started task 1 description",
      date: "2024-07-30",
      status: "Blocked"
    },{
      id: 1721907160913,
      title: "task 4",
      desc: "Not started task 1 description",
      date: "2024-07-30",
      status: "To Be Reviewed"
    },{
      id: 1721907160914,
      title: "task 5",
      desc: "Not started task 1 description",
      date: "2024-07-30",
      status: "In Process"
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTask: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      task.status = status;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask:(state,action)=>{
      const {id}=action.payload;
      state.tasks=state.tasks.filter((task)=>task.id!==id);
      localStorage.setItem("tasks",JSON.stringify(state.tasks));
    }
  },
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;