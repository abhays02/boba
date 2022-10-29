// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcroundnavigatenextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcroundnavigatenextIcon(props: IcroundnavigatenextIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.31 6.71a.996.996 0 000 1.41L13.19 12l-3.88 3.88a.997.997 0 001.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcroundnavigatenextIcon;
/* prettier-ignore-end */
