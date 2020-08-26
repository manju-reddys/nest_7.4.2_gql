import { Query, Resolver } from "@nestjs/graphql";
import { Base } from "../apis/base";

@Resolver()
export class SimpleResolver {
    @Query(() => [Base])
    everything(): Promise<Base[]> {
        console.log('Simple resolver, should have called after gateway');
        const b = new Base();
        b.name = 'Hello'
        return Promise.resolve([b]);
    }
}