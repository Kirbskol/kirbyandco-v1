import React, { ReactElement } from "react";
import { Text } from "./Typography";
import { CheckBadge, Phone, Mail } from "./Icons";

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
      className={`flex flex-col rounded-lg p-2 py-4 sm:py-4 sm:p-4 max-w-[60em] h-full shadow-md border ${classes}`}
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
      className={`flex flex-col rounded-lg p-4 sm:max-w-[60em] h-[11em] sm:h-full shadow-md border ${classes}`}
      style={{ backgroundColor: lighterBackgroundColor, borderColor }}
    >
      <div
        className="flex items-center gap-2 pb-4 rounded-md"
        style={{ backgroundColor: lighterBackgroundColor }}
      >
        <CheckBadge textColorClass="text-[#189E5B] hidden sm:flex" />
        <Text
          variant="h3alt2"
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

export const ContactCards = ({
  header,
  children,
  classes,
  backgroundColor,
  lighterBackgroundColor,
  borderColor,
  category
}) => {
  return (
    <div
      className={`flex flex-col rounded-lg p-4 w-full h-full shadow-md ${classes}`}
      style={{ backgroundColor: lighterBackgroundColor, borderColor }}
    >
      <div
        className="flex items-center justify-start gap-2 pb-4 rounded-md"
        style={{ backgroundColor: lighterBackgroundColor }}
      >
        {category === "phone" && 
          (<Phone textColorClass="text-[#E5AA70]" />
        )}
        {category === "mail" && 
          (<Mail textColorClass="text-[#E5AA70]" />
        )}
        <Text
          variant="h3alt"
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