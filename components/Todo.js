import React, { useState } from "react";
import TodoForm from "./TodoForm";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  <div className="flex bg-white bg-opacity-30 shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl ">
     <div className="flex items-start px-4 py-6">
        <img className="w-15 h-15 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar"/>
        <div className="">
           <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
                  
           </div>
           <div >
            awesomecommunity great to have something on th
          </div>
              

           <div className="mt-4 flex items-center">
              <div className="flex mr-2 text-gray-700 text-sm mr-3">
                 <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                 <span>0</span>
              </div>
              <div className="flex mr-2 text-gray-700 text-sm mr-8">
                 <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                 </svg>
                 <span>0</span>
              </div>
           </div>
        </div>
     </div>
  </div>

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="left">
       
      </div>
      <div
        className="right"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-around"
          }}
        >
          
        </div>
        
        





















        {/* above this */}
        
      </div>
      <div className="flex bg-white bg-opacity-30 shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl ">
         <div className="flex items-start px- py-">
            <img className="w-12 h-12 rounded-full object-cover m-4 shadow " src="https://gateway.lighthouse.storage/ipfs/QmcmV56Qf81hdEsfkavV4tywyCj6ZkYbYrMk47voXfQABP" />
            <div className="">
               <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 mx-10 ">0x545a67953579fctx </h2>
                  
               </div>
               <div className="mx-10" key={todo.id} onClick={() => completeTodo(todo.id)} >
                {todo.text}
              </div>
              

              
            </div>
         </div>
      </div>
    </div>
  ));
};

export default Todo;
