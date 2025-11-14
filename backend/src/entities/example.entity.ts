import { Entity, PrimaryKey, UuidType } from "@mikro-orm/core";

@Entity()
export class ExampleEntity {
@PrimaryKey()
id!: UuidType;
}