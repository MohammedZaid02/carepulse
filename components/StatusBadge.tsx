import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

type Status = "scheduled" | "pending" | "cancelled"; // Ensure Status is a union of valid strings

export const StatusBadge = ({ status }: { status: Status }) => {
  const styleStatus: Status = status; // Explicitly define styleStatus as Status

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
        alt="status icon"
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
        {styleStatus}
      </p>
    </div>
  );
};
