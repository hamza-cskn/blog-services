export class BlogDto {
    id: string;
    visible: boolean;
    title: string;
    subtitle: string;
    createdDate: Date;
    modifiedDate: Date;
    content: string;
    theme: string;
    author: string;
    original_language: string;
}

export const BlogDTOStub = (): BlogDto => {
    return {
        id: 'test',
        visible: true,
        title: 'test',
        subtitle: 'test',
        createdDate: new Date(),
        modifiedDate: new Date(),
        content: 'roses are red, violets are blue, this is a test, and so are you',
        theme: 'test',
        author: 'test',
        original_language: 'test'
    };
};