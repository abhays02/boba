// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2284IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2284Icon(props: Rectangle2284IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 88 8"}
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
        d={"M7.653 0h70.131l9.327 8H0l7.653-8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle2284Icon;
/* prettier-ignore-end */
