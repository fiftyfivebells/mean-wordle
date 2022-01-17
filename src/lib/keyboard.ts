import React from "react";
import { CharStatus } from "./status";

export interface KeyProps {
  value: string,
  status: CharStatus
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface KeyboardProps {
  handleEnter: (e: React.MouseEvent) => void
  handleDelete: (e: React.MouseEvent) => void
  handleValue: (e: React.MouseEvent) => void
  keyStatus: { [key: string]: CharStatus }
}