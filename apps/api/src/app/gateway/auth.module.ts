import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GatewayMiddleware } from './gateway.middleware';

@Module({})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(GatewayMiddleware)
                .forRoutes('(.*)');
    }
}