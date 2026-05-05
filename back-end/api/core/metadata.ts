type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export interface RouteMetadata {
  method: HttpMethod;
  path: string;
  handler: string | symbol;
}

export const ROUTES_KEY = Symbol("routes");