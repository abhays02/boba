// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorStroke16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorStroke16Icon(props: VectorStroke16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.293.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L8.004 3.418V13a1 1 0 11-2 0V3.41L1.707 7.707A1 1 0 01.293 6.293l6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorStroke16Icon;
/* prettier-ignore-end */
