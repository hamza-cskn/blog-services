import {Test, TestingModule} from '@nestjs/testing';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {CreateUserDto} from "./dto/create-user.dto";
import {CredentialsDto} from "./dto/credentials.dto";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";

describe('AppController', () => {
    let authController: AuthController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [JwtModule.register({
                global: true,
                secret: jwtConstants.secret,
                signOptions: {expiresIn: '60s'},
            })],
            controllers: [AuthController],
            providers: [AuthService],
        }).compile();

        authController = app.get<AuthController>(AuthController);
    });

    describe('root', () => {
        it('register, login and validate user', async () => {
            const newUserReq: CreateUserDto = {username: "test", password: "secret"};
            await authController.register(newUserReq);

            const loginReq: CredentialsDto = {username: "test", password: "secret"};
            const loginResponse = await authController.login(loginReq);
            expect(loginResponse.access_token).toBeDefined();

            const validateReq = {body: {access_token: loginResponse.access_token}};
            const validateResponse = await authController.validate(validateReq);
            expect(validateResponse.validity).toBe(true);
        });

        it('try wrong credentials', async () => {
            const newUserReq: CreateUserDto = {username: "test", password: "secret"};
            await authController.register(newUserReq);

            const loginReq: CredentialsDto = {username: "test", password: "wrong"};
            const loginRes = await authController.login(loginReq).catch(e => e);
            expect(loginRes instanceof Error).toBe(true);
        });

        it('try wrong token', async () => {
            const validateReq = {body: {access_token: "wrong"}};
            const response = await authController.validate(validateReq).catch(e => e);
            expect(response instanceof Error).toBe(true);
        });
    });
});
