// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTegSiZJp55bKXTV98MuX6
// Component: HfRk4Osuyd
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: pTegSiZJp55bKXTV98MuX6/projectcss
import sty from "./PlasmicTelicon.module.css"; // plasmic-import: HfRk4Osuyd/css

import Vector3Svg2Icon from "./icons/PlasmicIcon__Vector3Svg2"; // plasmic-import: 86sb2j-E8_/icon

export type PlasmicTelicon__VariantMembers = {};
export type PlasmicTelicon__VariantsArgs = {};
type VariantPropType = keyof PlasmicTelicon__VariantsArgs;
export const PlasmicTelicon__VariantProps = new Array<VariantPropType>();

export type PlasmicTelicon__ArgsType = {};
type ArgPropType = keyof PlasmicTelicon__ArgsType;
export const PlasmicTelicon__ArgProps = new Array<ArgPropType>();

export type PlasmicTelicon__OverridesType = {
  root?: p.Flex<"svg">;
};

export interface DefaultTeliconProps {
  className?: string;
}

function PlasmicTelicon__RenderFunc(props: {
  variants: PlasmicTelicon__VariantsArgs;
  args: PlasmicTelicon__ArgsType;
  overrides: PlasmicTelicon__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <Vector3Svg2Icon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      role={"img"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTelicon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTelicon__VariantsArgs;
    args?: PlasmicTelicon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTelicon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTelicon__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTelicon__ArgProps,
          internalVariantPropNames: PlasmicTelicon__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTelicon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTelicon";
  } else {
    func.displayName = `PlasmicTelicon.${nodeName}`;
  }
  return func;
}

export const PlasmicTelicon = Object.assign(
  // Top-level PlasmicTelicon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTelicon
    internalVariantProps: PlasmicTelicon__VariantProps,
    internalArgProps: PlasmicTelicon__ArgProps
  }
);

export default PlasmicTelicon;
/* prettier-ignore-end */