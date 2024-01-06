import { PlusCircle } from "lucide-react";
import { Button } from "ui";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalFooter,
  ModalCancel,
  ModalAction,
} from "ui";

function AddTaskModal() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="mb-2 mt-2 justify-start text-primary hover:bg-primary/5"
        >
          <PlusCircle className="h-5 w-5" />
          Add task
        </Button>
      </ModalTrigger>
      <ModalContent>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="taskName"
            id="taskName"
            className="outline-none text-xl font-semibold"
            placeholder="Task name"
          />
          <input
            type="text"
            name="taskDescription"
            id="taskDescription"
            className="outline-none text-sm font-light"
            placeholder="Description"
          />
        </div>
        <hr className="-mx-8"/>
        <ModalFooter>
          <ModalCancel asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalCancel>
          <ModalAction>Add task</ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTaskModal;
