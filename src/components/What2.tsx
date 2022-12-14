// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicWhat2,
  DefaultWhat2Props
} from "./plasmic/blank_project/PlasmicWhat2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface What2Props extends Omit<DefaultWhat2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultWhat2Props altogether and have
// total control over the props for your component.
export interface What2Props extends DefaultWhat2Props {}

function What2_(props: What2Props, ref: HTMLElementRefOf<"a">) {
  // Use PlasmicWhat2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicWhat2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all What2Props here, but feel free
  // to do whatever works for you.

  return <PlasmicWhat2 root={{ ref }} {...props} />;
}

const What2 = React.forwardRef(What2_);
export default What2;
