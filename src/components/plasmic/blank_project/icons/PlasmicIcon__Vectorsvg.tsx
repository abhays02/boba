// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorsvgIcon(props: VectorsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.5.282A7.699 7.699 0 019.601 0c.925 0 1.78.24 2.57.463l.383.106c.93.253 1.98.494 3.445.494 1.464 0 2.514-.24 3.444-.494l.381-.106C20.614.241 21.47.001 22.396 0a7.19 7.19 0 012.04.286h.004c1.808.533 3.18 1.871 4.236 3.693 1.051 1.815 1.841 4.198 2.465 7.007.64 2.88.997 5.519.807 7.598-.187 2.06-.962 3.93-2.932 4.6-1.209.411-2.356.15-3.345-.423-.96-.557-1.826-1.433-2.593-2.386-.723-.897-1.47-1.445-2.492-1.79-1.067-.362-2.486-.522-4.587-.522-2.1 0-3.542.16-4.632.523-1.045.348-1.808.899-2.524 1.789l-.001.001c-.76.943-1.612 1.826-2.567 2.386-.99.58-2.137.834-3.365.41C1.057 22.532.296 20.627.077 18.6c-.227-2.091.059-4.745.704-7.617.63-2.805 1.42-5.187 2.469-7.002C4.303 2.16 5.673.82 7.484.287l.008-.002.007-.003zm.581 2.046c-1.106.327-2.096 1.18-2.983 2.714-.893 1.546-1.625 3.689-2.235 6.405m5.218-9.12a5.558 5.558 0 011.513-.201H9.6c.609 0 1.151.15 1.956.374l.437.12c1.024.278 2.278.569 4.007.569 1.729 0 2.982-.29 4.006-.57.153-.041.298-.081.435-.12.805-.223 1.348-.373 1.959-.373h.005a5.05 5.05 0 011.433.2c1.107.327 2.102 1.18 2.991 2.716.895 1.544 1.627 3.686 2.23 6.403.628 2.826.924 5.204.766 6.947-.16 1.762-.734 2.52-1.498 2.78-.479.163-.98.1-1.582-.249-.631-.365-1.303-1.01-2.003-1.878-.946-1.175-2.02-1.983-3.469-2.474-1.404-.475-3.106-.634-5.273-.634-2.168 0-3.887.159-5.309.633-1.464.488-2.56 1.293-3.511 2.475-.707.876-1.365 1.52-1.985 1.884-.585.343-1.08.41-1.586.235-.621-.216-1.214-.967-1.411-2.792-.19-1.761.043-4.156.665-6.925"
        }
        fill={"#BDBDBD"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.5.282A7.699 7.699 0 019.601 0c.925 0 1.78.24 2.57.463l.383.106c.93.253 1.98.494 3.445.494 1.464 0 2.514-.24 3.444-.494l.381-.106C20.614.241 21.47.001 22.396 0a7.19 7.19 0 012.04.286h.004c1.808.533 3.18 1.871 4.236 3.693 1.051 1.815 1.841 4.198 2.465 7.007.64 2.88.997 5.519.807 7.598-.187 2.06-.962 3.93-2.932 4.6-1.209.411-2.356.15-3.345-.423-.96-.557-1.826-1.433-2.593-2.386-.723-.897-1.47-1.445-2.492-1.79-1.067-.362-2.486-.522-4.587-.522-2.1 0-3.542.16-4.632.523-1.045.348-1.808.899-2.524 1.789l-.001.001c-.76.943-1.612 1.826-2.567 2.386-.99.58-2.137.834-3.365.41C1.057 22.532.296 20.627.077 18.6c-.227-2.091.059-4.745.704-7.617.63-2.805 1.42-5.187 2.469-7.002C4.303 2.16 5.673.82 7.484.287l.008-.002.007-.003zm.581 2.046c-1.106.327-2.096 1.18-2.983 2.714-.893 1.546-1.625 3.689-2.235 6.405m5.218-9.12a5.558 5.558 0 011.513-.201H9.6c.609 0 1.151.15 1.956.374l.437.12c1.024.278 2.278.569 4.007.569 1.729 0 2.982-.29 4.006-.57.153-.041.298-.081.435-.12.805-.223 1.348-.373 1.959-.373h.005a5.05 5.05 0 011.433.2c1.107.327 2.102 1.18 2.991 2.716.895 1.544 1.627 3.686 2.23 6.403.628 2.826.924 5.204.766 6.947-.16 1.762-.734 2.52-1.498 2.78-.479.163-.98.1-1.582-.249-.631-.365-1.303-1.01-2.003-1.878-.946-1.175-2.02-1.983-3.469-2.474-1.404-.475-3.106-.634-5.273-.634-2.168 0-3.887.159-5.309.633-1.464.488-2.56 1.293-3.511 2.475-.707.876-1.365 1.52-1.985 1.884-.585.343-1.08.41-1.586.235-.621-.216-1.214-.967-1.411-2.792-.19-1.761.043-4.156.665-6.925"
        }
        fill={"url(#UGptdC9ZKa)"}
      ></path>

      <path
        d={
          "M18.4 10.894a1.33 1.33 0 001.333-1.328c0-.734-.597-1.329-1.333-1.329a1.33 1.33 0 00-1.333 1.329 1.33 1.33 0 001.333 1.328z"
        }
        fill={"#BDBDBD"}
      ></path>

      <path
        d={
          "M18.4 10.894a1.33 1.33 0 001.333-1.328c0-.734-.597-1.329-1.333-1.329a1.33 1.33 0 00-1.333 1.329 1.33 1.33 0 001.333 1.328z"
        }
        fill={"url(#UGptdC9ZKb)"}
      ></path>

      <path
        d={
          "M21.333 13.817a1.336 1.336 0 01-1.232-.82 1.325 1.325 0 01.29-1.449 1.335 1.335 0 012.276.944 1.335 1.335 0 01-1.333 1.325z"
        }
        fill={"#BDBDBD"}
      ></path>

      <path
        d={
          "M21.333 13.817a1.336 1.336 0 01-1.232-.82 1.325 1.325 0 01.29-1.449 1.335 1.335 0 012.276.944 1.335 1.335 0 01-1.333 1.325z"
        }
        fill={"url(#UGptdC9ZKc)"}
      ></path>

      <path
        d={
          "M21.333 7.972c.737 0 1.334-.595 1.334-1.329s-.597-1.329-1.334-1.329c-.736 0-1.333.595-1.333 1.329s.597 1.329 1.333 1.329z"
        }
        fill={"#BDBDBD"}
      ></path>

      <path
        d={
          "M21.333 7.972c.737 0 1.334-.595 1.334-1.329s-.597-1.329-1.334-1.329c-.736 0-1.333.595-1.333 1.329s.597 1.329 1.333 1.329z"
        }
        fill={"url(#UGptdC9ZKd)"}
      ></path>

      <path
        d={
          "M24.267 10.894A1.33 1.33 0 0025.6 9.566a1.33 1.33 0 00-1.333-1.329c-.737 0-1.334.595-1.334 1.329s.597 1.328 1.334 1.328z"
        }
        fill={"#BDBDBD"}
      ></path>

      <path
        d={
          "M24.267 10.894A1.33 1.33 0 0025.6 9.566a1.33 1.33 0 00-1.333-1.329c-.737 0-1.334.595-1.334 1.329s.597 1.328 1.334 1.328z"
        }
        fill={"url(#UGptdC9ZKe)"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.6 5.314c.589 0 1.066.476 1.066 1.063v2.126H12.8c.589 0 1.066.476 1.066 1.063s-.477 1.063-1.066 1.063h-2.134v2.125c0 .587-.477 1.063-1.066 1.063-.59 0-1.067-.476-1.067-1.063V10.63H6.4a1.065 1.065 0 110-2.127h2.133V6.377c0-.587.478-1.063 1.067-1.063z"
        }
        fill={"#BDBDBD"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.6 5.314c.589 0 1.066.476 1.066 1.063v2.126H12.8c.589 0 1.066.476 1.066 1.063s-.477 1.063-1.066 1.063h-2.134v2.125c0 .587-.477 1.063-1.066 1.063-.59 0-1.067-.476-1.067-1.063V10.63H6.4a1.065 1.065 0 110-2.127h2.133V6.377c0-.587.478-1.063 1.067-1.063z"
        }
        fill={"url(#UGptdC9ZKf)"}
      ></path>

      <defs>
        <linearGradient
          id={"UGptdC9ZKa"}
          x1={"0"}
          y1={"23.385"}
          x2={"34.4"}
          y2={"23.385"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"UGptdC9ZKb"}
          x1={"0"}
          y1={"23.385"}
          x2={"34.4"}
          y2={"23.385"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"UGptdC9ZKc"}
          x1={"0"}
          y1={"23.385"}
          x2={"34.4"}
          y2={"23.385"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"UGptdC9ZKd"}
          x1={"0"}
          y1={"23.385"}
          x2={"34.4"}
          y2={"23.385"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"UGptdC9ZKe"}
          x1={"0"}
          y1={"23.385"}
          x2={"34.4"}
          y2={"23.385"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"UGptdC9ZKf"}
          x1={"0"}
          y1={"23.385"}
          x2={"34.4"}
          y2={"23.385"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default VectorsvgIcon;
/* prettier-ignore-end */