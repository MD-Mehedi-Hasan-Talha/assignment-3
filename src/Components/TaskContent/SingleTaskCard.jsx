import { dateFormatter } from "../../utils/dateFormatter";
import { Delete, Edit } from "../Icons/ContentIcons";

export default function SingleTaskCard({
  color,
  heading,
  description,
  date,
  onDelete,
  onEdit,
}) {
  const formattedDate = dateFormatter(date);

  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className={`mb-2 flex-1 font-semibold ${color}`}>{heading}</h4>
        <div className="flex gap-2">
          <a onClick={onDelete}>
            <Delete />
          </a>
          <a onClick={onEdit}>
            <Edit />
          </a>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{description}</p>

      <p className="mt-6 text-xs text-zinc-400">{formattedDate}</p>
    </div>
  );
}
