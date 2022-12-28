import React, { useEffect, useRef } from "react";
import Task from "./task";

const Tasks = () => {
  interface TasksI {
    id: number;
    title: string;
    date: string;
    hour: string;
  }

  const tasks: TasksI[] = [
    {
      id: 1,
      title: "Café da manha",
      date: "16/12",
      hour: "07:00AM",
    },
    {
      id: 2,
      title: "Estudar NodeJs",
      date: "16/12",
      hour: "08:00AM",
    },
    {
      id: 3,
      title: "Terminar Site",
      date: "16/12",
      hour: "10:00AM",
    },
    {
      id: 4,
      title: "Almoço",
      date: "16/12",
      hour: "12:00AM",
    },
    {
      id: 5,
      title: "Almoço",
      date: "16/12",
      hour: "12:00AM",
    },
    {
      id: 6,
      title: "Almoço",
      date: "16/12",
      hour: "12:00AM",
    },
    {
      id: 7,
      title: "Almoço",
      date: "16/12",
      hour: "12:00AM",
    },
    {
      id: 8,
      title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      date: "16/12",
      hour: "12:00AM",
    },
  ];

  return (
    <section id="tasks">
      <div id="tasks__container">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              title={task.title}
              date={task.date}
              hour={task.hour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tasks;
