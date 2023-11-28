import { FC } from "react";
import { icons } from "./icons";
import { ProjectInfo } from "../models/project.model";

export const Socials: FC<{ config: ProjectInfo }> = ({ config }) => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-5 py-2">
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="h-6 w-6"
        >
          {icon({ fill: "#ffffff", config })}
        </div>
      ))}
    </div>
  );
};
