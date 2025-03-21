import { Router } from "director/build/director";
import { DirectorConfig } from "./utils";
import { RoutesConfig } from "./route";
import { Store } from "./router-store";
export type { Router as DirectorRouter };
export declare const startRouter: <T extends Store>(routes: RoutesConfig<T>, store: T, config?: DirectorConfig) => Router;
//# sourceMappingURL=start-router.d.ts.map