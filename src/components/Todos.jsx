import { toast } from "sonner";
import Loading from "./Loading";
import Todo from "./Todo";
import { setData } from "../lib/rudex.toolkit/slices/todo-slices";
import { useSelector } from "react-redux";

export default function Todos() {
  useSelector((state) => {});

  getTodos()
    .then(
      (res) => {
        console.log(res);
        setData(res);
      },
      ({ message }) => {
        toast.error(message);
      }
    )

    .finally();

  if (false) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <p>{error}</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="container mx-auto px-5 flex justify-center py-10">
        <p>No data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 container mx-auto px-5 pb-10 pt-[116px]">
      {[].map(({ completed, title, id, priority }) => {
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
