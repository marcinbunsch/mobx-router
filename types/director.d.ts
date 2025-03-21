declare module "director/build/director" {
  export class Router {
    constructor(routes: any);
    configure(config: any): this;
    init(path?: string): void;
    dispatch(method: "on", path: string): void;
  }
}
