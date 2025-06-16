"use client";
import classNames from "classnames";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const containerClass = classNames(
    "container bg-white max-w-3xl rounded-lg shadow-lg rounded mx-auto my-16 px-4 py-6",
    className,
  );
  return <div className={containerClass}>{children}</div>;
};

export default Container;
