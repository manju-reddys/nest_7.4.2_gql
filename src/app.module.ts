import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpModule } from './graphql/gp.module';

@Module({
    imports: [
        GpModule,
        GraphQLModule.forRoot({
            debug: false,
            playground: true,            
            autoSchemaFile: 'dist/schema.gql',
            include: [GpModule],            
            uploads: false,
            useGlobalPrefix: true
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
