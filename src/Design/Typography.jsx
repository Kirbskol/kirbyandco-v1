import React from "react";

const tags = {
  h1: "h1",
  h2: "h2",
  h2alt: "h2",
  h3: "h3",
  h3alt:"h3",
  h3alt2:"h3",
  h4: "h4",
  h4alt:"h4",
  h5: "h5",
  h6: "span",
  body: "p",
  "body-small": "p",
  small: "p",
  xs: "p",
  alternate: "p"
};

const sizes = {
  h1: "text-4xl sm:text-5xl font-semibold",
  h2: "text-3xl sm:text-4xl font-semibold",
  h2alt: "text-xl sm:text-3xl font-semibold",
  h3: "text-2xl sm:text-3xl font-semibold",
  h3alt: "text-base sm:text-3xl font-semibold",
  h3alt2: "text-base sm:text-3xl [@media(min-width:2040px)]:text-4xl font-semibold",
  h4: "text-xl sm:text-2xl font-semibold",
  h4alt: "text-sm sm:text-2xl 4xl:text-3xl font-semibold",
  h5: "text-lg sm:text-xl font-semibold",
  h6: "text-base sm:text-xl [@media(min-width:2040px)]:text-2xl",
  body: "text-base sm:text-lg [@media(min-width:2040px)]:text-2xl",
  "body-small": "text-sm sm:text-base",
  small: "text-xs sm:text-sm",
  xs:"text-[0.5em] sm:text-[0.7em]",
  alternate: "text-xs sm:text-base [@media(min-width:2040px)]:text-lg"
};

const styles = {
  primary: "font-sans antialiased",
  secondary: "font-sans antialiased text-gray-400",
  success: "font-sans antialiased text-green-500",
  danger: "font-sans antialiased text-red-500",
};

export const Text = ({ variant = "primary", children, className = "", as, classes = "", ...props }) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  const textStyle = styles[variant] || styles.primary;
  const finalClass = `${textStyle} ${sizeClasses} ${className} ${classes}`;

  return <Tag className={finalClass} {...props}>{children}</Tag>;
};