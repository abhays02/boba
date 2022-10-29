// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1955IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1955Icon(props: Vector1955IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 6"}
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
          "M4.243 5.657L0 1.414 1.415 0l2.828 2.829L7.071 0l1.415 1.414-4.243 4.243z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector1955Icon;
/* prettier-ignore-end */
