import React, { useState } from "react";

const Inputbox = ({ setList }) => {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    const newItem = {
      id: Math.random(),
      value,
    };

    // Update local storage
    const storedList = JSON.parse(localStorage.getItem("todoList")) || [];
    const updatedList = [...storedList, newItem];
    localStorage.setItem("todoList", JSON.stringify(updatedList));

    // Update state
    setList(updatedList);

    setValue("");
  };

  return (
    <div className="flex justify-between items-center border border-purple-500 w-1/2 mx-auto rounded-md py-2 px-4">
      <input
        type="text"
        placeholder="Enter TODO"
        value={value}
        onChange={inputHandler}
        className="rounded-md py-1 px-2 w-1/2 border-none bg-transparent text-xl outline-none"
      />
      <button
        onClick={submitHandler}
        className="bg-purple-700 rounded-lg text-white font-bold px-3 py-2 w-1/5 text-2xl"
      >
        Add
      </button>
    </div>
  );
};

export default Inputbox;
