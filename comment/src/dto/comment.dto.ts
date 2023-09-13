interface Comment {

    id: string;
    visible?: boolean;
    writer: string;
    content: string;
    createdDate: Date;
    subComments?: Comment[];
}
