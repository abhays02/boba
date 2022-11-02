// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMornav,
  DefaultMornavProps
} from "./plasmic/blank_project/PlasmicMornav";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface MornavProps extends Omit<DefaultMornavProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultMornavProps altogether and have
// total control over the props for your component.
export interface MornavProps extends DefaultMornavProps {}

function Mornav_(props: MornavProps, ref: HTMLElementRefOf<"a">) {
  // Use PlasmicMornav to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMornav are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all MornavProps here, but feel free
  // to do whatever works for you.

  return <PlasmicMornav root={{ ref }} {...props} />;
}

const Mornav = React.forwardRef(Mornav_);
export default Mornav;
