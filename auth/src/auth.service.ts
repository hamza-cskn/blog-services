import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {CreateUserDto} from "./dto/create-user.dto";
import {UserDto} from "./dto/user.dto";
import {CredentialsDto} from "./dto/credentials.dto";
import {Permissions} from "./permissions/permissions";

@Injectable()
export class AuthService {

    private fake_db: UserDto[] = [ {
        id: "1",
        credentials: {
            username: "test",
            password: "test"
        },
        registeredAt: new Date(),
        permissions: [Permissions.ACCESS_ADMIN_PANEL]
    } ];

    constructor(private jwtService: JwtService) {}

    async registerUser(user: CreateUserDto): Promise<boolean> {
        if (!user)
            throw new UnauthorizedException("No user provided");
        //todo validate user
        //todo check if user exists
        //todo hash password
        //todo save user to db
        const createdUser:UserDto = {
            id: this.uuid(),
            credentials: user,
            registeredAt: new Date(),
            permissions: []
        }
        this.fake_db.push(createdUser);
        return true;
    }

    async loginUser(credentials: CredentialsDto): Promise<string> {
        if (!credentials)
            throw new UnauthorizedException("No credentials provided");
        //todo validate user
        //todo check if user exists
        //todo hash password
        //todo check if password matches
        const user = this.fake_db.find(user => user.credentials.username === credentials.username &&
                                                user.credentials.password === credentials.password);
        if (!user)
            throw new UnauthorizedException("No user found with given credentials");
        return await this.generateToken(user);
    }

    private async generateToken(payload: any): Promise<string> {
        return this.jwtService.signAsync(payload);
    }

    async validateToken(token: string): Promise<any> {
        if (!token)
            throw new UnauthorizedException("No token provided");

        try {
            const payload = await this.jwtService.verifyAsync(token);
            delete payload.credentials.password;
            return payload;
        } catch {
            throw new UnauthorizedException("Invalid token");
        }
    }

    private uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });

    }
}
