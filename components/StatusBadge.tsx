import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  // Map Appwrite status values to our application's display values
  const displayStatus =
    status === "schedule"
      ? "scheduled"
      : status === "canceled"
        ? "cancelled"
        : status;

  // Get the correct status for styling
  const styleStatus =
    status === "schedule"
      ? "scheduled"
      : status === "canceled"
        ? "cancelled"
        : status;

  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": styleStatus === "scheduled",
        "bg-blue-600": styleStatus === "pending",
        "bg-red-600": styleStatus === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[styleStatus]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": styleStatus === "scheduled",
          "text-blue-500": styleStatus === "pending",
          "text-red-500": styleStatus === "cancelled",
        })}
      >
        {displayStatus}
      </p>
    </div>
  );
};
