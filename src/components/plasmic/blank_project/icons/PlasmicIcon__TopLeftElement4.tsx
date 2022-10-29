// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopLeftElement4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopLeftElement4Icon(props: TopLeftElement4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 111 10"}
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

      <path d={"M0 0h102.322l8.671 9.712H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default TopLeftElement4Icon;
/* prettier-ignore-end */
