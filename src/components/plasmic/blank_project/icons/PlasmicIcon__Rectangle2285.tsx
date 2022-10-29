// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2285IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2285Icon(props: Rectangle2285IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 8"}
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

      <path d={"M7.028 0h64.406L80 8H0l7.028-8z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Rectangle2285Icon;
/* prettier-ignore-end */
