// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupsvgIcon(props: GroupsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.537 6.815c0 3.764-3.03 6.815-6.768 6.815C3.03 13.63 0 10.58 0 6.815 0 3.051 3.03 0 6.769 0c3.738 0 6.768 3.051 6.768 6.815z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M13.537 6.815c0 3.764-3.03 6.815-6.768 6.815C3.03 13.63 0 10.58 0 6.815 0 3.051 3.03 0 6.769 0c3.738 0 6.768 3.051 6.768 6.815z"
        }
        fill={"url(#q4T91nSBma)"}
      ></path>

      <path
        d={
          "M20.963 6.815c0 3.543-1.515 6.415-3.384 6.415-1.87 0-3.385-2.872-3.385-6.415S15.71.4 17.58.4c1.869 0 3.384 2.872 3.384 6.415z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M20.963 6.815c0 3.543-1.515 6.415-3.384 6.415-1.87 0-3.385-2.872-3.385-6.415S15.71.4 17.58.4c1.869 0 3.384 2.872 3.384 6.415z"
        }
        fill={"url(#q4T91nSBmb)"}
      ></path>

      <path
        d={
          "M24 6.815c0 3.175-.533 5.748-1.19 5.748-.658 0-1.19-2.573-1.19-5.748 0-3.174.532-5.748 1.19-5.748.657 0 1.19 2.574 1.19 5.748z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M24 6.815c0 3.175-.533 5.748-1.19 5.748-.658 0-1.19-2.573-1.19-5.748 0-3.174.532-5.748 1.19-5.748.657 0 1.19 2.574 1.19 5.748z"
        }
        fill={"url(#q4T91nSBmc)"}
      ></path>

      <defs>
        <linearGradient
          id={"q4T91nSBma"}
          x1={"0"}
          y1={"13.63"}
          x2={"14.553"}
          y2={"13.63"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"q4T91nSBmb"}
          x1={"14.194"}
          y1={"13.23"}
          x2={"21.471"}
          y2={"13.23"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>

        <linearGradient
          id={"q4T91nSBmc"}
          x1={"21.619"}
          y1={"12.563"}
          x2={"24.178"}
          y2={"12.563"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#C9FF00"}></stop>

          <stop offset={"1"} stopColor={"#1CD5CF"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GroupsvgIcon;
/* prettier-ignore-end */
