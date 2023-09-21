import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, HydratedDocument} from 'mongoose';
import {CredentialsDto} from "../dto/credentials.dto";

export type UserDocument = HydratedDocument<User>;

@Schema({versionKey: false}) //to do not include '__v' field.
export class User extends Document {
    @Prop()
    id: string;

    @Prop()
    credentials: CredentialsDto;

    @Prop()
    registeredAt: Date;

    @Prop()
    permissions: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
