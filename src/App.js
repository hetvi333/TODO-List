import React, { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Inputbox from "./components/Inputbox";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todoList")) || [];
    setList(storedList);
  }, []);

  const deleteHandler = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
    setList(updatedList);
  };

  return (
    <div className="App bg-slate-200 h-screen overflow-y-scroll text-center p-0 m-0 font-serif">
      <h1 className="text-5xl text-center py-7 font-semibold text-purple-800">
        React To Do
      </h1>

      <Inputbox setList={setList} />

      {list.length > 0 && (
        <div className="w-1/2 rounded-md border border-purple-500 my-4 mx-auto px-3 py-1">
          {list.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              name={item.value}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
