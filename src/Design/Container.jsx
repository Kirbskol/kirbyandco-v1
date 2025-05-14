import React, { ReactNode } from "react";
import { Text } from "./Typography";

export const PageContainer = ({
  children,
  isLoading = false,
  direction = "row",
  classes = "",
}) => {
  return (
    <div
      className={`flex flex-${direction} min-[320px]:max-w-fit md:w-full min-h-screen p-3 pt-40 ${classes}`}
    >
      {children}
    </div>
  );
};