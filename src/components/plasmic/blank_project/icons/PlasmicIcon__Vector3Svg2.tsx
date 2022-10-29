// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Svg2Icon(props: Vector3Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.389.423a1.784 1.784 0 00-1.806-.3L1.127 8.158A1.75 1.75 0 00.008 9.964a1.773 1.773 0 001.419 1.584l5.197 1.03v6.494a1.773 1.773 0 002.451 1.639c.215-.09.41-.221.574-.387l2.88-2.87 4.355 3.834c.322.284.735.441 1.164.444.189.003.376-.027.554-.09a1.762 1.762 0 001.186-1.284l4.166-18.195a1.773 1.773 0 00-.565-1.74zM7.299 10.905L1.782 9.809l15.47-6.083-9.951 7.18zm1.098 8.167V13.82l2.792 2.46-2.792 2.792zm9.662.887l-9.13-8.034L22.08 2.429l-4.022 17.53z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M23.389.423a1.784 1.784 0 00-1.806-.3L1.127 8.158A1.75 1.75 0 00.008 9.964a1.773 1.773 0 001.419 1.584l5.197 1.03v6.494a1.773 1.773 0 002.451 1.639c.215-.09.41-.221.574-.387l2.88-2.87 4.355 3.834c.322.284.735.441 1.164.444.189.003.376-.027.554-.09a1.762 1.762 0 001.186-1.284l4.166-18.195a1.773 1.773 0 00-.565-1.74zM7.299 10.905L1.782 9.809l15.47-6.083-9.951 7.18zm1.098 8.167V13.82l2.792 2.46-2.792 2.792zm9.662.887l-9.13-8.034L22.08 2.429l-4.022 17.53z"
        }
        fill={"url(#mBMSQZNCga)"}
      ></path>

      <defs>
        <linearGradient
          id={"mBMSQZNCga"}
          x1={"0"}
          y1={"21.732"}
          x2={"25.8"}
          y2={"21.732"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Vector3Svg2Icon;
/* prettier-ignore-end */
