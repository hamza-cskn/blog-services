import {BadRequestException, Body, Controller, Post, Req, Res} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CredentialsDto} from "./dto/credentials.dto";

@Controller()
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post("register")
    async register(@Body() createUser: CredentialsDto) {
        const status = await this.authService.registerUser(createUser).catch(() => false);
        if (!status)
            throw new BadRequestException("Invalid credentials.");
        return {message: "User registered successfully."};
    }

    @Post("login")
    async login(@Body() credentials: CredentialsDto) {
        console.log(credentials)
        const token = await this.authService.loginUser(credentials).catch(() => false);
        if (!token)
            throw new BadRequestException("Invalid credentials.");
        return {message: "User logged in successfully.", access_token: token};
    }

    @Post("validate")
    async validate(@Req() request) {
        const response = await this.authService.validateToken(request.body.access_token).catch(() => false)
        if (!response)
            throw new BadRequestException("Token could not verified.");
        return {validity: true, payload: response, message: "The token provided is valid."};
    }
}
