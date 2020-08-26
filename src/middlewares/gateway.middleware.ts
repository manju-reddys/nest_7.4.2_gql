import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class GatewayMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        console.log('Gateway checked');
        next();
    }
}