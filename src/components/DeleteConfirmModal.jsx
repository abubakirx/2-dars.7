import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function DeleteConfirmModal({ open, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Balki bir oylab korarsiz😁 ?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={onCancel}>
            Censel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Delete 🤷‍♂️
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
