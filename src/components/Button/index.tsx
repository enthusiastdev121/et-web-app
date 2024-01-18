import classNames from "classnames";
import Spinner from "components/Spinner";
import { THEME } from "@/utils/constants/theme";
import { darken, rgba } from "polished";
import React from "react";
import styled from "styled-components";

export default function Button({
  icon,
  primary,
  green = false,
  outline,
  light,
  rounded,
  size = "root",
  children,
  loading = false,
  red = false,
  link = false,
  fullWidth = false,
  disabled = false,
  endIcon,
  onClick,
  outlined,
  ...props
}: {
  icon?: any;
  endIcon?: any;
  primary?: boolean;
  green?: boolean;
  outline?: boolean;
  outlined?: boolean;
  light?: boolean;
  size?: "root" | "large" | "small";
  rounded?: boolean;
  children: any;
  loading?: boolean;
  red?: boolean;
  link?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: any;
}) {

  console.log("DIS", disabled)

  return (
    <Root
      onClick={(e) => {

        if (onClick) {

          // if (!disabled && !loading) {
          onClick(e)
          // }
        }

      }}

      fullWidth={fullWidth}
      size={size}
      style={{ pointerEvents: loading || disabled ? "none" : "all" }}
      {...props}
      className={`${classNames({ primary: primary }, { light: light }, { rounded }, { red }, { "bg-green-600 text-white": green }, { link }, { outlined: outlined }, { outline })}`}
    >
      {loading && (
        <div className="absolute">
          <Spinner primary={outlined} />
        </div>
      )}
      <div style={{ opacity: loading ? 0 : 1 }} className="flex gap-1 items-center">
        {icon && <div className="icon">{icon}</div>} {children}
        {endIcon && <div className="icon end">{endIcon}</div>}
      </div>
    </Root>
  );
}

const Root = styled.button<{
  fullWidth: boolean;
  size?: "root" | "large" | "small";
}>`
  /* padding: 8px 15px; */
  border-radius: ${THEME.btnRadius.small}px;
  display: ${(p) => (p.fullWidth ? "flex" : "inline-flex")};
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  position: relative;
  font-weight: 600;
  color: ${(p) => rgba(p.theme.base, 0.8)};
  background: ${(p) => rgba(p.theme.base, 0.09)};
  cursor: pointer;
  transition: all 0.2s;
  font-size: ${(p) => (p.size === "small" ? "16px" : p.size === "root" ? "16px" : p.size === "large" ? "16px" : "16px")};
  user-select: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${(p) => (p.size === "small" ? "0.3em 1em" : p.size === "root" ? "0.5em 1.5em" : p.size === "large" ? "0.5em 2em" : "0.5em 1.5em")};
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => rgba(p.theme.base, 0.12)};
    /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05); */
    // transform: translateY(-1px);
  }

  &.primary {
    background: ${(p) => p.theme.primary};
    color: #fff;
    border: 1px solid ${(p: any) => p.theme.primary};

    &:hover,
    &:active {
      background: ${(p) => darken(0.09, p.theme.primary)};
      border: 1px solid ${(p: any) => darken(0.09, p.theme.primary)};
    }

    &.light {
      background: ${(p) => rgba(p.theme.primary, 0.18)};
      color: ${(p) => p.theme.primary};
      border-color: ${(p) => rgba(p.theme.primary, 0.18)};
      &:hover,
      &:active {
        background: ${(p) => rgba(p.theme.primary, 0.24)};
      }
    }

    &.outlined {
      // background: ${(p) => p.theme.pure};
      background: transparent;
      color: ${(p) => p.theme.primary};

      &:hover,
      &:active {
        background: ${(p) => p.theme.primary};
        color: #fff;
      }
    }

    &.link {
      background: transparent;
      color: ${(p) => p.theme.primary};
      border: none;

      &:hover,
      &:active,
      &:focus {
        background: ${(p) => p.theme.primary};
        color: #fff;
      }
    }
  }

  &.red {
    background: ${(p) => p.theme.red};
    color: #fff;
    &:hover,
    &:active {
      background: ${(p) => darken(0.09, p.theme.red)};
    }

    &.light {
      background: ${(p) => rgba(p.theme.red, 0.18)};
      color: ${(p) => p.theme.red};
      &:hover,
      &:active {
        background: ${(p) => rgba(p.theme.red, 0.24)};
      }
    }
  }

  &.rounded {
    border-radius: 120px;
  }

  &.outline {
    background: transparent;
    border: 1px solid;
    border: none !important;
    border-color: ${(p) => rgba(p.theme.base, 0.4)};
    color: ${(p) => p.theme.base};
  }
`;
