import { Application } from "express";
import { ControllerBase } from "./types";

export function registerRoutes(app: Application, controller: ControllerBase) {
  const basePath = (controller as any).basePath ?? "";
  const proto = Object.getPrototypeOf(controller);
  const routes: any[] = proto.routes ?? []; // <-- era proto[ROUTES_KEY]

  console.log(`=== ${controller.constructor.name}: ${routes.length} rotas ===`);

  for (const route of routes) {
    const fullPath = `${basePath}${route.path}`;
    const handler = (controller as any)[route.handler as string].bind(controller);
    app[route.method](fullPath, handler);
    console.log(`  [${route.method.toUpperCase()}] ${fullPath}`);
  }
}