// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorStrokesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorStrokesvgIcon(props: VectorStrokesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 15"}
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
          "M13.707 6.594a1 1 0 010 1.415l-6 6a1 1 0 01-1.414-1.415l4.289-4.288H1a1 1 0 110-2h9.59L6.293 2.009A1 1 0 017.707.594l6 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorStrokesvgIcon;
/* prettier-ignore-end */
