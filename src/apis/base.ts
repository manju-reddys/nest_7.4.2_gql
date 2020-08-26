import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Base {
    @Field()
    name!: string;
}