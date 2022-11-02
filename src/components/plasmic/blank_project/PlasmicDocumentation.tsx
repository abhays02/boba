// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTegSiZJp55bKXTV98MuX6
// Component: AG3PbycRE-
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
import sty from "./PlasmicDocumentation.module.css"; // plasmic-import: AG3PbycRE-/css

export type PlasmicDocumentation__VariantMembers = {};
export type PlasmicDocumentation__VariantsArgs = {};
type VariantPropType = keyof PlasmicDocumentation__VariantsArgs;
export const PlasmicDocumentation__VariantProps = new Array<VariantPropType>();

export type PlasmicDocumentation__ArgsType = {};
type ArgPropType = keyof PlasmicDocumentation__ArgsType;
export const PlasmicDocumentation__ArgProps = new Array<ArgPropType>();

export type PlasmicDocumentation__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultDocumentationProps {
  className?: string;
}

function PlasmicDocumentation__RenderFunc(props: {
  variants: PlasmicDocumentation__VariantsArgs;
  args: PlasmicDocumentation__ArgsType;
  overrides: PlasmicDocumentation__OverridesType;

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
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      href={"#" as const}
    >
      {"Documentation"}
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocumentation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocumentation__VariantsArgs;
    args?: PlasmicDocumentation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocumentation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDocumentation__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDocumentation__ArgProps,
          internalVariantPropNames: PlasmicDocumentation__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDocumentation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocumentation";
  } else {
    func.displayName = `PlasmicDocumentation.${nodeName}`;
  }
  return func;
}

export const PlasmicDocumentation = Object.assign(
  // Top-level PlasmicDocumentation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDocumentation
    internalVariantProps: PlasmicDocumentation__VariantProps,
    internalArgProps: PlasmicDocumentation__ArgProps
  }
);

export default PlasmicDocumentation;
/* prettier-ignore-end */
