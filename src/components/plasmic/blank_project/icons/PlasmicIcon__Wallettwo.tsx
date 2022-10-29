// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WallettwoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WallettwoIcon(props: WallettwoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 58"}
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
          "M2.417 9.667A2.417 2.417 0 014.833 7.25h48.334a2.417 2.417 0 012.416 2.417v9.666a2.418 2.418 0 01-1.94 2.37h-.002l-.013.003-.078.017a24.452 24.452 0 00-1.577.416c-1.048.314-2.42.796-3.767 1.47C45.29 25.067 43.5 26.881 43.5 29c0 2.12 1.79 3.933 4.706 5.39 1.348.675 2.719 1.157 3.767 1.471a24.452 24.452 0 001.577.417l.078.016.013.003a2.417 2.417 0 011.942 2.37v9.666a2.417 2.417 0 01-2.416 2.417H4.833a2.417 2.417 0 01-2.416-2.417V9.667zM50.75 40.54l-.166-.05c-1.217-.365-2.867-.94-4.54-1.776-3.126-1.563-7.377-4.583-7.377-9.714 0-5.13 4.251-8.15 7.377-9.714 1.673-.836 3.323-1.411 4.54-1.777l.166-.049v-5.377H7.25v33.834h43.5V40.54zM48.333 29a2.417 2.417 0 012.417-2.417h2.417a2.417 2.417 0 010 4.834H50.75A2.417 2.417 0 0148.333 29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WallettwoIcon;
/* prettier-ignore-end */
