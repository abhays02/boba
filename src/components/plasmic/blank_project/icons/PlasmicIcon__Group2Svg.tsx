// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2SvgIcon(props: Group2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 16"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 11.17l-2.968 2.968A2.362 2.362 0 011 12.468V11.17l1.357-6.784A4 4 0 016.279 1.17h9.442a4 4 0 013.922 3.216L21 11.17v1.297a2.361 2.361 0 01-4.032 1.67L14 11.17H8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 1.17l1 2h4l1-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group2SvgIcon;
/* prettier-ignore-end */
