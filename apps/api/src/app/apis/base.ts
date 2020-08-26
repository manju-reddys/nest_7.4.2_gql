import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Base {
    @Field({defaultValue: ''})
    name!: string;
}