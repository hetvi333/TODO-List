import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";

const TodoItem = (props) => {
  const [todoValue, setTodoValue] = useState(props.name);
  const [isUpdate, setIsUpdate] = useState(false);

  const updateHandler = () => {
    setIsUpdate(!isUpdate);
  };

  const updateInputHandler = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <div className="bg-transparent p-5 border-b border-purple-400 last-of-type:border-none text-xl">
      {!isUpdate ? (
        <div className="flex justify-between items-center ">
          <span className="text-slate-600 font-medium">{todoValue}</span>
          <div className="flex justify-center gap-5">
            <FaEdit
              onClick={updateHandler}
              className="text-yellow-600 cursor-pointer"
            />

            <RiDeleteBin7Fill
              onClick={() => props.deleteHandler(props.id)}
              className="text-red-600 cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <input
            value={todoValue}
            onChange={updateInputHandler}
            className="bg-transparent border-b border-slate-400 pb-1"
          />
          <IoCheckmarkCircle
            onClick={updateHandler}
            className="text-green-600 text-2xl cursor-pointer"
          /> 
        </div>
      )}
    </div>
  );
};

export default TodoItem;
