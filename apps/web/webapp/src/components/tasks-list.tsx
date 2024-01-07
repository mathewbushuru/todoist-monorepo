import { useState } from "react";
import { CalendarClock } from "lucide-react";
import { Checkbox } from "ui";

import AddTaskModal from "@/components/add-task-modal";

interface TaskType {
  id: number;
  name: string;
  description: string | null;
  dueDate: Date | null;
  completed: boolean;
}

export default function TasksList() {
  return (
    <div className="px-10">
      {sampleTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <AddTaskModal />
    </div>
  );
}

function Task({ task }: { task: TaskType }) {
  const [checked, setChecked] = useState(
    task.completed ? true : "indeterminate",
  );

  return (
    <div className="">
      <label className="flex max-w-[18rem] items-center gap-3 pt-3 sm:max-w-md">
        <Checkbox
          checked={checked !== "indeterminate"}
          onCheckedChange={() =>
            setChecked((prevIsChecked) =>
              prevIsChecked === "indeterminate" ? false : "indeterminate",
            )
          }
        />
        <div className="flex flex-col gap-1">
          <span className="text-base sm:text-sm">{task.name}</span>
          {task.description && (
            <span className="text-sm text-muted/60 sm:text-xs">{task.description}</span>
          )}
          {task.dueDate && (
            <span className="flex items-center gap-1 text-xs text-muted/40 text-orange-300">
              <CalendarClock className="h-4 w-4 stroke-1 " />
              {task.dueDate.toDateString()}
            </span>
          )}
        </div>
      </label>
      <hr className="-mx-1.5 mt-4" />
    </div>
  );
}


const sampleTasks: TaskType[] = [
    {
      id: 1,
      name: "Webapp to watch any movie - movies.mathewbushuru.com",
      description: "Name it Flix?",
      dueDate: null,
      completed: true,
    },
    {
      id: 2,
      name: "Rix entertainment app - record past movies, books and video games",
      description: "Add ML recommendations",
      dueDate: null,
      completed: false,
    },
    {
      id: 3,
      name: "Rebuild portfolio - mathewbushuru.com",
      description: null,
      dueDate: null,
      completed: false,
    },
    {
      id: 4,
      name: "Point of Sales retail system SAAS",
      description: "Merchandising, reports, ordering, warehouse, ecommerce API",
      dueDate: null,
      completed: false,
    },
    {
      id: 5,
      name: "Test task name",
      description: "Test task description",
      dueDate: new Date(),
      completed: false,
    },
    {
      id: 6,
      name: "Outfits app",
      description: null,
      dueDate: null,
      completed: false,
    },
  ];