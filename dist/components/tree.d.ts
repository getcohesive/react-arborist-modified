/// <reference types="react" />
import { TreeApi } from "../interfaces/tree-api";
import { TreeProps } from "../types/tree-props";
export declare const Tree: <T>(props: TreeProps<T> & import("react").RefAttributes<TreeApi<T> | undefined>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
