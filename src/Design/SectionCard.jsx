import React, { ReactElement } from "react";
import { Text } from "./Typography";
import { CheckBadge } from "./Icons";

export const SectionCards = ({
  header,
  children,
  classes,
  backgroundColor,
  lighterBackgroundColor,
  borderColor,
}) => {

  return (
    <div
      className={`flex flex-col rounded-lg p-4 max-w-[42em] h-full shadow-md border ${classes}`}
      style={{ backgroundColor: lighterBackgroundColor, borderColor }}
    >
      <div
        className="mb-4 rounded-md"
        style={{ backgroundColor: lighterBackgroundColor }}
      >
        <Text
          variant="h3"
          className={`font-semibold rounded-md`}
        >
          {header}
        </Text>
      </div>
      <div className="flex flex-col overflow-auto h-full">
        {children}
      </div>
    </div>
  );
};

export const ServiceCards = ({
  header,
  children,
  classes,
  backgroundColor,
  lighterBackgroundColor,
  borderColor,
}) => {

  return (
    <div
      className={`flex flex-col rounded-lg p-4 max-w-[58em] h-full shadow-md border ${classes}`}
      style={{ backgroundColor: lighterBackgroundColor, borderColor }}
    >
      <div
        className="flex items-center gap-2 mb-4 rounded-md"
        style={{ backgroundColor: lighterBackgroundColor }}
      >
        <CheckBadge textColorClass="text-[#189E5B]" />
        <Text
          variant="h4"
          className={`font-semibold rounded-md`}
        >
          {header}
        </Text>
      </div>
      <div className="flex flex-col overflow-auto h-full">
        {children}
      </div>
    </div>
  );
};