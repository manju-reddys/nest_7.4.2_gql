import { Inject, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class GatewayMiddleware implements NestMiddleware {
    constructor(@Inject('ASYNC_PROV') private ay: string) {}
    use(req: any, res: any, next: () => void) {
        console.log('\n\nGateway checked\n\n');
        console.log(this.ay);
        next();
    }
}