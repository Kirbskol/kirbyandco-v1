import { CheckBadgeIcon } from "@heroicons/react/16/solid";

export const CheckBadge = ({ textColorClass }) => {
  return <CheckBadgeIcon className={`size-6 ${textColorClass}`} />;
};