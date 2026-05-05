type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export interface RouteMetadata {
  method: HttpMethod;
  path: string;
  handler: string;
}

function createMethodDecorator(method: HttpMethod) {
  return (path: string) =>
    (originalMethod: any, context: ClassMethodDecoratorContext) => {

      context.addInitializer(function (this: any) {
        const proto = Object.getPrototypeOf(this);

        if (!Object.prototype.hasOwnProperty.call(proto, "routes")) {
          proto.routes = [];
        }

        proto.routes.push({ method, path, handler: context.name }); // <-- context.name direto
      });

      return originalMethod;
    };
}

export const Get = createMethodDecorator("get");
export const Post = createMethodDecorator("post");
export const Put = createMethodDecorator("put");
export const Delete = createMethodDecorator("delete");
export const Patch = createMethodDecorator("patch");