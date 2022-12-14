// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1SvgIcon(props: Vector1SvgIconProps) {
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
          "M23.937 3.178a.878.878 0 00-.813-.539h-3.339a5.25 5.25 0 00-8.26-1.109 5.239 5.239 0 00-1.581 3.745v.67c-4.47-1.164-8.128-4.766-8.16-4.81a.879.879 0 00-.89-.21.89.89 0 00-.605.682C-.666 6.9.926 10.449 2.431 12.492a11.928 11.928 0 002.713 2.68c-1.68 1.9-4.273 2.888-4.295 2.9a.877.877 0 00-.428 1.306c.088.132.417.56 1.22.967.999.494 2.317.747 3.91.747 7.743 0 14.223-5.964 14.882-13.642l3.317-3.306a.923.923 0 00.187-.966zM18.96 6.44a.857.857 0 00-.252.57c-.45 6.91-6.228 12.324-13.159 12.324-1.164 0-1.977-.153-2.548-.34 1.263-.681 3.02-1.867 4.163-3.57a.878.878 0 00-.056-1.03.889.889 0 00-.284-.233c-.011-.01-1.637-.857-3.032-2.779C2.211 9.208 1.541 6.56 1.805 3.507 3.54 4.935 6.857 7.263 10.68 7.9a.89.89 0 00.714-.197.902.902 0 00.307-.67V5.275a3.515 3.515 0 016.733-1.405.89.89 0 00.813.527h1.757L18.961 6.44z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M23.937 3.178a.878.878 0 00-.813-.539h-3.339a5.25 5.25 0 00-8.26-1.109 5.239 5.239 0 00-1.581 3.745v.67c-4.47-1.164-8.128-4.766-8.16-4.81a.879.879 0 00-.89-.21.89.89 0 00-.605.682C-.666 6.9.926 10.449 2.431 12.492a11.928 11.928 0 002.713 2.68c-1.68 1.9-4.273 2.888-4.295 2.9a.877.877 0 00-.428 1.306c.088.132.417.56 1.22.967.999.494 2.317.747 3.91.747 7.743 0 14.223-5.964 14.882-13.642l3.317-3.306a.923.923 0 00.187-.966zM18.96 6.44a.857.857 0 00-.252.57c-.45 6.91-6.228 12.324-13.159 12.324-1.164 0-1.977-.153-2.548-.34 1.263-.681 3.02-1.867 4.163-3.57a.878.878 0 00-.056-1.03.889.889 0 00-.284-.233c-.011-.01-1.637-.857-3.032-2.779C2.211 9.208 1.541 6.56 1.805 3.507 3.54 4.935 6.857 7.263 10.68 7.9a.89.89 0 00.714-.197.902.902 0 00.307-.67V5.275a3.515 3.515 0 016.733-1.405.89.89 0 00.813.527h1.757L18.961 6.44z"
        }
        fill={"url(#QC44jaxHDa)"}
      ></path>

      <defs>
        <linearGradient
          id={"QC44jaxHDa"}
          x1={"0"}
          y1={"21.092"}
          x2={"25.8"}
          y2={"21.092"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Vector1SvgIcon;
/* prettier-ignore-end */
