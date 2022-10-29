// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 14"}
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
          "M13.537 6.815c0 3.764-3.03 6.815-6.768 6.815C3.03 13.63 0 10.58 0 6.815 0 3.051 3.03 0 6.769 0c3.738 0 6.768 3.051 6.768 6.815zm7.426 0c0 3.543-1.515 6.415-3.385 6.415-1.869 0-3.384-2.872-3.384-6.415S15.709.4 17.578.4c1.87 0 3.385 2.872 3.385 6.415zm3.037 0c0 3.175-.533 5.748-1.19 5.748-.658 0-1.19-2.573-1.19-5.748 0-3.174.532-5.748 1.19-5.748.657 0 1.19 2.574 1.19 5.748z"
        }
        opacity={".4"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
