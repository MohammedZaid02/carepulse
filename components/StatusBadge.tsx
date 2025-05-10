import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

// Import the Status type from the application types
type Status = "scheduled" | "pending" | "cancelled";

export const StatusBadge = ({ status }: { status: Status }) => {
  // Map Appwrite status values to our application's display values
  const displayStatus = status;

  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": displayStatus === "scheduled",
        "bg-blue-600": displayStatus === "pending",
        "bg-red-600": displayStatus === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[displayStatus]}
        alt="status icon"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": displayStatus === "scheduled",
          "text-blue-500": displayStatus === "pending",
          "text-red-500": displayStatus === "cancelled",
        })}
      >
        {displayStatus}
      </p>
    </div>
  );
};
