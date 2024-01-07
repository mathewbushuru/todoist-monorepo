import { Checkbox } from "ui";

interface TaskType {
  id: number;
  name: string;
  description: string | null;
  dueDate: Date | null;
}

const sampleTasks: TaskType[] = [
  {
    id: 1,
    name: "Webapp to watch any movie - movies.mathewbushuru.com",
    description: "Name it Flix?",
    dueDate: null,
  },
  {
    id: 2,
    name: "Rix entertainment app - record past movies, books and video games",
    description: "Add ML recommendations",
    dueDate: null,
  },
  {
    id: 3,
    name: "Rebuild portfolio - mathewbushuru.com",
    description: null,
    dueDate: null,
  },
  {
    id: 4,
    name: "Point of Sales retail system SAAS",
    description: "merchandising, reports, ordering, warehouse, ecommerce API",
    dueDate: null,
  },
  {
    id: 5,
    name: "Outfits app",
    description: null,
    dueDate: null,
  },
  {
    id: 6,
    name: "Test task name",
    description: "Test task description",
    dueDate: new Date(),
  },
];

export default function TasksList() {
  return (
    <div className="px-10">
      {sampleTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

function Task({ task }: { task: TaskType }) {
  return (
    <div className="">
      <label className="flex items-center gap-3 max-w-[18rem] text-base pt-3 pb-4">
        <Checkbox />
        <span>{task.name}</span>
      </label>
      <hr className="-mx-1.5"/>
    </div>
  );
}
