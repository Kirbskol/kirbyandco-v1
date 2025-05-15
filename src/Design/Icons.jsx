import { 
  CheckBadgeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PhoneIcon,
  InboxIcon
 } from "@heroicons/react/16/solid";

export const CheckBadge = ({ textColorClass }) => {
  return <CheckBadgeIcon className={`size-6 ${textColorClass}`} />;
};

export const ArrowLeft = ({ textColorClass }) => {
  return <ArrowLeftIcon className={`size-6 ${textColorClass}`} />;
};

export const ArrowRight = ({ textColorClass }) => {
  return <ArrowRightIcon className={`size-6 ${textColorClass}`} />;
};

export const Phone = ({ textColorClass }) => {
  return <PhoneIcon className={`size-5 sm:size-12 ${textColorClass}`} />;
};

export const Mail = ({ textColorClass }) => {
  return <InboxIcon className={`size-5 sm:size-12 ${textColorClass}`} />;
};