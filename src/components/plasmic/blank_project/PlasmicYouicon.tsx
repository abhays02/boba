// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTegSiZJp55bKXTV98MuX6
// Component: ZVVeXXYLXc
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
import sty from "./PlasmicYouicon.module.css"; // plasmic-import: ZVVeXXYLXc/css

import Group8637SvgIcon from "./icons/PlasmicIcon__Group8637Svg"; // plasmic-import: rw7Hbtzr6m/icon

export type PlasmicYouicon__VariantMembers = {};
export type PlasmicYouicon__VariantsArgs = {};
type VariantPropType = keyof PlasmicYouicon__VariantsArgs;
export const PlasmicYouicon__VariantProps = new Array<VariantPropType>();

export type PlasmicYouicon__ArgsType = {};
type ArgPropType = keyof PlasmicYouicon__ArgsType;
export const PlasmicYouicon__ArgProps = new Array<ArgPropType>();

export type PlasmicYouicon__OverridesType = {
  root?: p.Flex<"svg">;
};

export interface DefaultYouiconProps {
  className?: string;
}

function PlasmicYouicon__RenderFunc(props: {
  variants: PlasmicYouicon__VariantsArgs;
  args: PlasmicYouicon__ArgsType;
  overrides: PlasmicYouicon__OverridesType;

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
    <Group8637SvgIcon
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
  PlasmicYouicon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicYouicon__VariantsArgs;
    args?: PlasmicYouicon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicYouicon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicYouicon__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicYouicon__ArgProps,
          internalVariantPropNames: PlasmicYouicon__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicYouicon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicYouicon";
  } else {
    func.displayName = `PlasmicYouicon.${nodeName}`;
  }
  return func;
}

export const PlasmicYouicon = Object.assign(
  // Top-level PlasmicYouicon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicYouicon
    internalVariantProps: PlasmicYouicon__VariantProps,
    internalArgProps: PlasmicYouicon__ArgProps
  }
);

export default PlasmicYouicon;
/* prettier-ignore-end */
