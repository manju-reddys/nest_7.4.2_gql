import { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { GatewayMiddleware } from "./gateway.middleware";

export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(GatewayMiddleware)
                .forRoutes('(.*)');
    }
}