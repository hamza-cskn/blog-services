import {Permissions} from "../permissions/permissions";
import {CredentialsDto} from "./credentials.dto";

export class UserDto {
    id: string;
    credentials: CredentialsDto;
    registeredAt: Date;
    permissions: Permissions[];
}

export const UserDTOStub = (): UserDto => {
    return {
        id: '1',
        credentials: {
            username: 'admin',
            password: 'admin'
        },
        registeredAt: new Date(),
        permissions: [Permissions.ACCESS_ADMIN_PANEL]
    }
};