import {BadRequestException, Body, Controller, Post, Query, Req} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CredentialsDto} from "./dto/credentials.dto";

@Controller()
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }

    @Post("register")
    async register(@Body() createUser: CredentialsDto) {
        const status = await this.authService.registerUser(createUser).catch(() => false);
        if (!status)
            throw new BadRequestException("Invalid credentials.");
        return {message: "User registered successfully."};
    }

    @Post("login")
    async login(@Body() credentials: CredentialsDto) {
        const token = await this.authService.loginUser(credentials).catch(() => false);
        if (!token)
            throw new BadRequestException("Invalid credentials.");
        return {message: "User logged in successfully.", access_token: token};
    }

    //todo add guard to validate api token
    @Post("validate")
    async validate(@Req() request, @Query() permissions: boolean = false) {
        const response = await this.authService.validateToken(request.body.access_token).catch(() => false)
        if (!response)
            throw new BadRequestException("Token could not verified.");
        const user = this.authService.getUserByJti(response.jti);
        const result =  {validity: true, jti: response.jti, username: user.credentials.username, message: "The token provided is valid."};
        if (permissions)
            result["permissions"] = user.permissions;
        return result;
    }
}
