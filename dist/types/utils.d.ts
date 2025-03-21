import type { RoutesConfig } from "./route";
import { Store } from "./router-store";
export interface DirectorConfig {
    html5history?: boolean;
    notfound?(): void;
    [key: string]: any;
}
export declare const isObject: (obj: any) => any;
export declare const getObjectKeys: (obj: any) => string[];
export declare const viewsForDirector: <T extends Store>(views: RoutesConfig<T>, store: T, config: DirectorConfig) => {
    [path: string]: (...paramsArr: string[]) => any;
};
export declare const getRegexMatches: (string: string, regexExpression: RegExp, callback: (result: RegExpExecArray) => void) => void;
//# sourceMappingURL=utils.d.ts.map