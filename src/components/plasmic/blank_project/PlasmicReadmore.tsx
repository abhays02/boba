// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTegSiZJp55bKXTV98MuX6
// Component: h3jlN3DP8M
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
import sty from "./PlasmicReadmore.module.css"; // plasmic-import: h3jlN3DP8M/css

export type PlasmicReadmore__VariantMembers = {};
export type PlasmicReadmore__VariantsArgs = {};
type VariantPropType = keyof PlasmicReadmore__VariantsArgs;
export const PlasmicReadmore__VariantProps = new Array<VariantPropType>();

export type PlasmicReadmore__ArgsType = {};
type ArgPropType = keyof PlasmicReadmore__ArgsType;
export const PlasmicReadmore__ArgProps = new Array<ArgPropType>();

export type PlasmicReadmore__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultReadmoreProps {
  className?: string;
}

function PlasmicReadmore__RenderFunc(props: {
  variants: PlasmicReadmore__VariantsArgs;
  args: PlasmicReadmore__ArgsType;
  overrides: PlasmicReadmore__OverridesType;

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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {"Read More"}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReadmore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReadmore__VariantsArgs;
    args?: PlasmicReadmore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReadmore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicReadmore__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicReadmore__ArgProps,
          internalVariantPropNames: PlasmicReadmore__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicReadmore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReadmore";
  } else {
    func.displayName = `PlasmicReadmore.${nodeName}`;
  }
  return func;
}

export const PlasmicReadmore = Object.assign(
  // Top-level PlasmicReadmore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicReadmore
    internalVariantProps: PlasmicReadmore__VariantProps,
    internalArgProps: PlasmicReadmore__ArgProps
  }
);

export default PlasmicReadmore;
/* prettier-ignore-end */
