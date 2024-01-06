import { useState } from "react";
import { PlusCircle, CalendarDays } from "lucide-react";
import { Button, Calendar } from "ui";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalFooter,
  ModalCancel,
  ModalAction,
} from "ui";

export default function AddTaskModal() {
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
            className="text-xl font-semibold outline-none"
            placeholder="Task name"
          />
          <input
            type="text"
            name="taskDescription"
            id="taskDescription"
            className="text-sm font-light outline-none"
            placeholder="Description"
          />
        </div>

        <div className="">
          <CalendarModal />
        </div>
        <hr className="-mx-8" />
        <ModalFooter>
          <ModalCancel asChild className="text-foreground/80">
            <Button variant="secondary">Cancel</Button>
          </ModalCancel>
          <ModalAction>Add task</ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function CalendarModal() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [date, setDate] = useState<Date | undefined>(tomorrow);

  return (
    <Modal>
      <ModalTrigger asChild>
        <Button
          variant="outline"
          className="text-sm text-foreground/60"
          size="sm"
        >
          <CalendarDays className="h-5 w-5 stroke-1" />
          <span>Due date</span>
        </Button>
      </ModalTrigger>
      <ModalContent className="items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-fit rounded-md border"
        />
        <ModalFooter>
          <ModalCancel asChild className="text-foreground/80 text-sm">
            <Button variant="secondary">Cancel</Button>
          </ModalCancel>
          {date === undefined ? (
            <ModalAction className="text-sm">Select date</ModalAction>
          ) : (
            <ModalAction className="text-sm">
              Choose {date.getMonth() + 1} / {date.getDate()} /{" "}
              {date.getFullYear()}
            </ModalAction>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
