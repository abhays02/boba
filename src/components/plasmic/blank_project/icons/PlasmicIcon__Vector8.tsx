// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
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
          "M5.896 5.238c.107.1.132.216.073.347a.311.311 0 01-.307.2H3.674L4.72 8.177a.304.304 0 010 .246.33.33 0 01-.177.176l-.921.377a.336.336 0 01-.255 0 .332.332 0 01-.182-.17L2.19 6.533.567 8.101a.326.326 0 01-.359.07C.07 8.114 0 8.016 0 7.875V.321C0 .181.07.082.208.025a.333.333 0 01.36.07l5.328 5.143z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
