import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ""});
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue
    };
    setTodo(newTodo);
  }

  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
  }
  const deleteTodoClickHandler = (idx) => {
    dispatch(deleteTodo(idx))
  }

  const toggleTodoDone = (idx) => {
    dispatch(todoDoneToggle(idx))
  }

  return (
      <>
        <h3>Todos</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <button
                onClick={createTodoClickHandler}
                className="btn btn-primary float-end w-25">
              Create
            </button>
            <input
                onChange={todoChangeHandler}
                value={todo.do}
                className="form-control w-75"
            />
          </li>
          {
            todos.map((todo, idx) =>
                <li className="list-group-item" key={todo._id}>
                  <button
                      onClick={() => {
                        deleteTodoClickHandler(idx)
                      }}
                      className="btn btn-danger float-end ms-2"
                  >
                    Delete
                  </button>
                  <input
                      className="me-2"
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => {
                        toggleTodoDone(idx);
                      }}
                  />
                  {todo.do}
                </li>
            )
          }
        </ul>
      </>
  )
}

export default Todos;