import { Router } from "director/build/director";

import { autorun } from "mobx";

import { viewsForDirector, DirectorConfig } from "./utils";
import { RoutesConfig } from "./route";
import { Store } from "./router-store";

export type { Router as DirectorRouter };

const createDirectorRouter = <T extends Store>(
  views: RoutesConfig<T>,
  store: T,
  config: DirectorConfig = {}
) => {
  const router = new Router({
    ...viewsForDirector(views, store, config),
  });

  router
    .configure(config)
    // set fallback to /#/ only when hash routing
    .init(config.html5history === false ? "/" : undefined);

  return router;
};

export const startRouter = <T extends Store>(
  routes: RoutesConfig<T>,
  store: T,
  config: DirectorConfig = {}
) => {
  //create director configuration
  const defaultDirectorConfig = {
    html5history: true,
  };

  const directorConfig = Object.assign(defaultDirectorConfig, config);
  const directorRouter = createDirectorRouter<T>(routes, store, directorConfig);

  //autorun and watch for path changes
  autorun(() => {
    const { currentPath } = store.router;
    if (currentPath) {
      if (directorConfig.html5history) {
        if (currentPath !== window.location.pathname + window.location.search) {
          window.history.pushState(null, "", currentPath);
        }
      } else {
        const hash = `#${currentPath}`;
        if (hash !== window.location.hash) {
          window.history.pushState(null, "", `/${hash}`);
        }
      }
    }
  });

  return directorRouter;
};
