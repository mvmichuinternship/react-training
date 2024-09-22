import { useDeleteTodos, useEditTodos } from "../api/react-query";

export const Todo = ({ todo,
  //  deleteExistingTodo, editExistingTodo
   }) => {

  const { mutate:editMutate, isPending:editPending } = useEditTodos();
  const { mutate:deleteMutate, isPending:delPending } = useDeleteTodos();
  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => editMutate({ ...todo, done: e.target.checked })}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
        onClick={() => deleteMutate(todo)}
        className="color-danger"
      >
        Delete
      </button>
    </div>
  );
};
