import { Request, Response, NextFunction } from "express";

export type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export interface RouteDefinition {
  method: HttpMethod;
  path: string;
  handler: string;
}

export interface ControllerBase {
  basePath?: string;
  routes?: RouteDefinition[];
}