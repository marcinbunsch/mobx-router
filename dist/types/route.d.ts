import { Store } from './router-store';
import { ReactNode } from 'react';
export type RoutesConfig<T extends Store> = {
    [path: string]: Route<T, any, any>;
};
export type QueryParams = Record<string, string | number | undefined | boolean> | undefined;
export type RouteParams = QueryParams;
export declare class Route<S extends Store, P extends RouteParams = RouteParams, Q extends QueryParams = QueryParams> {
    path: string;
    readonly originalPath: string;
    readonly rootPath: string;
    readonly component: ReactNode;
    readonly title?: string;
    readonly onEnter?: (route: Route<S, P, Q>, params: P, store: S, currentQueryParams: Q) => void;
    readonly beforeEnter?: (route: Route<S, P, Q>, params: P, store: S, currentQueryParams: Q, nextPath: string) => void | boolean | Promise<boolean>;
    readonly beforeExit?: (route: Route<S, P, Q>, params: P, store: S, currentQueryParams: Q, nextPath: string) => void | boolean | Promise<boolean>;
    readonly onParamsChange?: (route: Route<S, P, Q>, params: P, store: S, currentQueryParams: Q) => void;
    readonly onExit?: (route: Route<S, P, Q>, params: P, store: S, currentQueryParams: Q, nextPath: string) => void;
    constructor({ path, component, onEnter, beforeExit, onParamsChange, beforeEnter, onExit, title, }: {
        path: string;
        component: JSX.Element;
        onEnter?: Route<S, P, Q>['onEnter'];
        beforeExit?: Route<S, P, Q>['beforeExit'];
        onParamsChange?: Route<S, P, Q>['onParamsChange'];
        beforeEnter?: Route<S, P, Q>['beforeEnter'];
        onExit?: Route<S, P, Q>['onExit'];
        title?: string;
    });
    getRootPath(): string;
    replaceUrlParams(params?: P, queryParams?: {}): string;
    getParamsObject(paramValues: Exclude<P, undefined>[keyof Exclude<P, undefined>][]): Exclude<P, undefined>;
}
//# sourceMappingURL=route.d.ts.map