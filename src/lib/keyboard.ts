import React from "react";
import { CharStatus } from "./status";

export interface KeyProps {
  value: string;
  status: CharStatus;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface KeyboardProps {
  handleEnter: () => void;
  handleDelete: () => void;
  handleValue: (e?: React.MouseEvent | null, key?: string) => void;
  keyStatus: { [key: string]: CharStatus };
}