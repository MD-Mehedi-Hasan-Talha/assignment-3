import {
  Calendar,
  Contact,
  Dashboard,
  Kanban,
  Messages,
  Projects,
  Settings,
} from "../Icons/SidebarIcons";

const sidebarItems = [
  {
    icon: <Dashboard />,
    name: "Dashboard",
  },
  {
    icon: <Projects />,
    name: "Projects",
  },
  {
    icon: <Contact />,
    name: "Contact",
  },
  {
    icon: <Kanban />,
    name: "Kanban",
  },
  {
    icon: <Calendar />,
    name: "Calendar",
  },
  {
    icon: <Messages />,
    name: "Messages",
  },
  {
    icon: <Settings />,
    name: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img
            src="/image/lws-logo-en.svg"
            className="mx-auto h-10 text-center"
          />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a className="flex items-center">
                {item.icon} {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
