import { PlusCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddNewTodoForm from "./AddNewTodoForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  function handleFilter(value) {
    dispatch({});
  }
  return (
    <header className="py-5 shadow-md fixed left-0 right-0 bg-white">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-3xl">Todo app</h1>
        <div className="flex items-center gap-5">
          <strong>Daraja bo'yicha filterlash:</strong>
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Daraja bo'yicha filterlash" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medium">O'rta</SelectItem>
              <SelectItem value="high">Yuqori</SelectItem>
              <SelectItem value="low">Quyi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: "default" })}>
            <PlusCircle />
            New
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yangi todo qo'shish</DialogTitle>
              <DialogDescription>
                Siz bu yerda yangi todo qo'shishingiz mumkin
              </DialogDescription>
            </DialogHeader>
            <AddNewTodoForm />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
