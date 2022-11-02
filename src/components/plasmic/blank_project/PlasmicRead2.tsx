// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pTegSiZJp55bKXTV98MuX6
// Component: RLq9-98SiQ
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
import sty from "./PlasmicRead2.module.css"; // plasmic-import: RLq9-98SiQ/css

export type PlasmicRead2__VariantMembers = {};
export type PlasmicRead2__VariantsArgs = {};
type VariantPropType = keyof PlasmicRead2__VariantsArgs;
export const PlasmicRead2__VariantProps = new Array<VariantPropType>();

export type PlasmicRead2__ArgsType = {};
type ArgPropType = keyof PlasmicRead2__ArgsType;
export const PlasmicRead2__ArgProps = new Array<ArgPropType>();

export type PlasmicRead2__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultRead2Props {
  className?: string;
}

function PlasmicRead2__RenderFunc(props: {
  variants: PlasmicRead2__VariantsArgs;
  args: PlasmicRead2__ArgsType;
  overrides: PlasmicRead2__OverridesType;

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
  PlasmicRead2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRead2__VariantsArgs;
    args?: PlasmicRead2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRead2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRead2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRead2__ArgProps,
          internalVariantPropNames: PlasmicRead2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRead2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRead2";
  } else {
    func.displayName = `PlasmicRead2.${nodeName}`;
  }
  return func;
}

export const PlasmicRead2 = Object.assign(
  // Top-level PlasmicRead2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRead2
    internalVariantProps: PlasmicRead2__VariantProps,
    internalArgProps: PlasmicRead2__ArgProps
  }
);

export default PlasmicRead2;
/* prettier-ignore-end */