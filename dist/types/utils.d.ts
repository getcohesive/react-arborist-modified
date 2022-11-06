/// <reference types="react" />
import { AnyAction } from "redux";
import { NodeApi } from "../interfaces/node-api";
export interface IdObj {
    id: string;
}
export declare type Identity = string | IdObj | null;
declare module "react" {
    function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
export declare type BoolFunc<T> = (data: T) => boolean;
export declare type ActionTypes<Actions extends {
    [name: string]: (...args: any[]) => AnyAction;
}> = ReturnType<Actions[keyof Actions]>;
export declare type SelectOptions = {
    multi?: boolean;
    contiguous?: boolean;
};
export declare type NodesById<T> = {
    [id: string]: NodeApi<T>;
};
