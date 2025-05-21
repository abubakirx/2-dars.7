import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "./ui/button";
import { CheckCircle, Trash, X } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDispatch, useSelector } from "react-redux";
import { openDeleteModal, closeDeleteModal } from "../lib/redux-toolkit/slices/modal-slice";
import { deleteTodoThunk } from "../lib/redux-toolkit/slices/todo-slice";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function Todo({
  priority = "secondary",
  title = "Abdullohning qochishi",
  completed = false,
  id = 1,
}) {
  const dispatch = useDispatch();
  const { deleteModal } = useSelector(state => state.modal);
  const styles = {
    medium: "outline",
    high: "destructive",
    low: "secondary",
  };

  function handleDeleteClick() {
    dispatch(openDeleteModal(id));
  }

  function handleConfirmDelete() {
    dispatch(deleteTodoThunk(deleteModal.id));
    dispatch(closeDeleteModal());
  }

  function handleCancelDelete() {
    dispatch(closeDeleteModal());
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-5">
          <span>
            Muhimlilik darajasi:{" "}
            <Badge className={"uppercase"} variant={styles[priority]}>
              {priority}
            </Badge>
          </span>
          <span className="flex items-center gap-2">
            Holati:
            <Button size={"icon"} variant={completed ? "outline" : "secondary"}>
              {completed ? <CheckCircle /> : <X />}
            </Button>
          </span>
        </CardContent>
        <CardFooter>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                onClick={handleDeleteClick}
                className={buttonVariants({ variant: "destructive" })}
              >
                <Trash />
              </TooltipTrigger>
              <TooltipContent>
                <p>O'chirmoqchisiz?</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
      <DeleteConfirmModal
        open={deleteModal.open && deleteModal.id === id}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}
