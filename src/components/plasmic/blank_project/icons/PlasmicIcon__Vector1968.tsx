// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1968IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1968Icon(props: Vector1968IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 19"}
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
          "M10 10.762a1.2 1.2 0 11-2.402 0 1.2 1.2 0 012.401 0zm5.2-1.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm8.243 5.451c-1.66 1.44-3.89 2.541-6.442 3.161a1.581 1.581 0 01-1.81-.84l-.95-1.9a19.367 19.367 0 01-4.482 0l-.95 1.9a1.58 1.58 0 01-1.81.84c-2.551-.62-4.782-1.72-6.442-3.16a1.6 1.6 0 01-.49-1.671l3.4-11.323A1.56 1.56 0 014.388 1 17.205 17.205 0 017.49.04a1.59 1.59 0 011.86 1.05l.6 1.78a19.166 19.166 0 014.102 0l.6-1.78A1.59 1.59 0 0116.51.04c1.062.22 2.1.542 3.101.96a1.56 1.56 0 01.92 1.02l3.401 11.323a1.6 1.6 0 01-.49 1.67zm-1.05-1.2L19.002 2.48a16.086 16.086 0 00-2.83-.88l-.511 1.5c.66.127 1.311.294 1.95.5a.801.801 0 01-.5 1.52c-1.53-.5-3.3-.76-5.111-.76-1.81 0-3.581.26-5.111.76a.8.8 0 11-.5-1.52c.639-.206 1.29-.373 1.95-.5l-.5-1.5c-.971.205-1.922.496-2.841.87l-3.4 11.333c1.47 1.28 3.47 2.25 5.78 2.82l.72-1.45a15.314 15.314 0 01-1.71-.45.8.8 0 11.5-1.52c1.531.5 3.302.76 5.112.76s3.581-.26 5.111-.76a.8.8 0 01.5 1.52c-.56.183-1.131.333-1.71.45l.72 1.45c2.31-.57 4.312-1.54 5.772-2.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector1968Icon;
/* prettier-ignore-end */
