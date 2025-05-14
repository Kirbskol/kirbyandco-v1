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
        className="flex w-full p-2 text-white rounded-lg hover:bg-[#242424] hover:cursor-pointer"
      >
        <Text variant="h4" className="ml-3">{label}</Text>
      </button>
    </li>
  );
};