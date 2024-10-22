import React from "react";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
  className?: string;
}

export const ButtonMd: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => (
  <button className={`btn_primary_md ${className || ""}`} onClick={onClick}>
    {children}
  </button>
);

export const ButtonPrimaryLg: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  className,
}) => (
  <button className={`btn_primary_lg ${className || ""}`} onClick={onClick}>
    {icon && (
      <Image
        src={icon}
        alt="button icon"
        width={20}
        height={20}
        className="p-[1.667px]"
      />
    )}
    {children}
  </button>
);

export const ButtonPrimaryXl: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  className,
}) => (
  <button className={`btn_primary_xl ${className || ""}`} onClick={onClick}>
    {children}
    {icon && (
      <Image
        src={icon}
        alt="button icon"
        width={20}
        height={20}
        className="p-[1.667px]"
      />
    )}
  </button>
);

export const ButtonPrimary2xl: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  className,
}) => (
  <button className={`btn_primary_2xl ${className || ""}`} onClick={onClick}>
    {children}
    {icon && (
      <Image
        src={icon}
        alt="button icon"
        width={20}
        height={20}
        className="p-[1.667px]"
      />
    )}
  </button>
);
