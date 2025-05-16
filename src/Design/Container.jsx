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
      className={`flex flex-${direction} min-[320px]:max-w-fit md:w-full min-h-screen sm:h-screen sm:max-h-[1400px] p-3 pt-30 sm:pt-50 ${classes}`}
    >
      {children}
    </div>
  );
};