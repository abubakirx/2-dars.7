import { toast } from "sonner";
import { getTodos } from "../request";
import Loading from "./Loading";
import Todo from "./Todo";
import { setData } from "../lib/redux-toolkit/slices/todo-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Todos() {
  const { data, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(filter)
      .then((res) => {
        console.log(res)
        dispatch(setData(res))
      })
      .catch(({ message }) => {
        toast.error(message)
      })
      .finally(() => { });
  }, [JSON.stringify(filter)])

  console.log(filter)

  if (false) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <Loading />
      </div>
    );
  }

  if (false) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <p>{error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <p>No data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 container mx-auto px-5 pb-10 pt-[116px]">
      {data.map(({ completed, title, id, priority }) => {
        return (
          <Todo
            completed={completed}
            key={id}
            title={title}
            priority={priority}
            id={id}
          />
        );
      })}
    </div>
  );
}
