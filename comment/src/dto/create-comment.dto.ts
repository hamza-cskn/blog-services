import {Length} from "class-validator";

export class CreateCommentDto {

    @Length(1, 50)
    writer: string;

    @Length(1, 500)
    content: string;
}
