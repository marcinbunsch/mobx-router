import React from 'react';
import { Route, RouteParams, QueryParams } from '../route';
import { Store, RouterStore } from '../router-store';
export declare const Link: (<S extends Store, P extends RouteParams, Q extends QueryParams>({ route, className, params, queryParams, refresh, style, children, title, router, }: React.PropsWithChildren<{
    route: Route<S, P, Q>;
    className?: string;
    params?: P;
    queryParams?: Q;
    refresh?: boolean;
    style?: React.StyleHTMLAttributes<HTMLAnchorElement>;
    title?: string;
    router: RouterStore<S>;
}>) => React.JSX.Element | null) & {
    displayName: string;
};
//# sourceMappingURL=Link.d.ts.map