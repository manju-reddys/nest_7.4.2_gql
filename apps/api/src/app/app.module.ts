import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './gateway/auth.module';
import { GpModule } from './graphql/gp.module';
import { asyncClient } from './providers/async.provider';

const syncProvider = [{
    provide: 'ASYNC_PROV',
    useFactory: async () => await asyncClient()
}]

@Module({
    imports: [
        GpModule,
        GraphQLModule.forRoot({
            debug: false,
            playground: true,
            autoSchemaFile: 'dist/apps/api/schema.gql',
            include: [GpModule],
            uploads: false,
            useGlobalPrefix: true
        }),
        AuthModule        
    ],
    controllers: [AppController],
    providers: [
        AppService,
        ...syncProvider // --> Async provider
    ],
    exports: [...syncProvider] // --> Exported async provider
})
export class AppModule { }
