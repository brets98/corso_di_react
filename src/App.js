import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos();
      setTodo(todosFromServer);
    };

    getTodos();
  }, []);

  //fetch todos from oour server
  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();
    return data;
  };

  //active deactivate the reminder of the server
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`);
    const data = await res.json();
    return data;
  };

  // delete todo

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });

    setTodo(todos.filter((todos) => todos.id !== id));
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const upTodo = { ...todoToToggle, reminder: !todoToToggle.reminder };

    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upTodo),
    });
    const data = await res.json();

    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: !todo.reminder } : todo
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/todos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTodo([...todos, data]);
  };
  return (
    <div className="container">
      <Header title={"Tasks Traker"} onAdd={addTask} />
      {todos.length > 0 ? (
        <Tasks
          tasks={todos}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
