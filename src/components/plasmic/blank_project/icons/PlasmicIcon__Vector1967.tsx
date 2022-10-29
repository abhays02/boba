// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1967IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1967Icon(props: Vector1967IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 22"}
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
        opacity={".4"}
        d={
          "M23.389.423a1.784 1.784 0 00-1.806-.3L1.127 8.158A1.75 1.75 0 00.008 9.964a1.773 1.773 0 001.419 1.584l5.197 1.03v6.494a1.773 1.773 0 002.451 1.639c.215-.09.41-.221.574-.387l2.88-2.87 4.355 3.834c.322.284.735.441 1.164.444.189.003.376-.027.554-.09a1.762 1.762 0 001.186-1.284l4.166-18.195a1.773 1.773 0 00-.565-1.74zM7.299 10.905L1.782 9.809l15.47-6.083-9.951 7.18zm1.098 8.167V13.82l2.792 2.46-2.792 2.792zm9.662.887l-9.13-8.034L22.08 2.429l-4.022 17.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector1967Icon;
/* prettier-ignore-end */
