import { Route } from '.';
import { RouteParams, QueryParams } from './route';
export type Store = {
    router: RouterStore<any>;
};
export declare class RouterStore<S extends Store> {
    params: RouteParams;
    queryParams: QueryParams;
    currentRoute?: Route<S, any, any>;
    readonly store: S;
    constructor(store: S);
    goTo<P extends RouteParams = Record<string, string | number | undefined | boolean>, Q extends QueryParams = Record<string, string | number | undefined | boolean>>(route: Route<S, P, Q>, paramsObj?: P, queryParamsObj?: Q): Promise<void>;
    get currentPath(): string;
}
//# sourceMappingURL=router-store.d.ts.map