import React from "react";
import { Text } from "../../Design/Typography";

export const SideMenuItem = ({ label, click, toggle }) => {
  const handleClick = (event) => {
    event.preventDefault();

    if (toggle) {
      toggle();
    }

    if (click) {
      click();
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full justify-center p-2 text-white rounded-lg hover:bg-[#242424] hover:cursor-pointer"
      >
        <Text variant="h4" className="px-4">{label}</Text>
      </button>
    </li>
  );
};