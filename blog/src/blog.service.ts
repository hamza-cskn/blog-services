import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schemas/blog.schema';
import {BlogDto} from "./dto/blog.dto";

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}

  create(createBlogDto: CreateBlogDto) {
    const blog = createBlogDto as Blog;
    blog.createdDate = new Date();
    blog.modifiedDate = new Date();
    blog.visible = true;
    return this.blogModel
      .create(blog)
      .then((blog) => BlogService.queryToBlog(blog));
  }

  findAll(options: FindAllOptions) {
    return (
      this.blogModel
        //if showUnverified is true, show all blogs, otherwise only show verified blogs
        .find({
          visible: options.showUnverified
            ? { $in: [true, false, undefined] }
            : true,
        })
        .skip(options.pagination.offset)
        .limit(options.pagination.limit)
        .sort({ createdDate: -1 })
        .then((blogs) => blogs.map((blog) => BlogService.queryToBlog(blog)))
        .then((blogs) => {
          if (!options.plainText) return blogs;
          return blogs.map((blog) => {
            blog.content = BlogService.removeMarkdown(blog.content);
            return blog;
          });
        })
    );
  }

  findOne(id: string) {
    return this.blogModel
      .findById(id)
      .then((blog) => BlogService.queryToBlog(blog));
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.blogModel
      .updateOne({ _id: id }, updateBlogDto)
      .then((blog) => BlogService.queryToBlog(blog));
  }

  delete(id: string) {
    return this.blogModel
      .deleteOne({ _id: id })
      .then((blog) => BlogService.queryToBlog(blog));
  }

  private static queryToBlog(query: any): BlogDto {
    query.id = query._id;
    delete query._doc._id;
    return Object.assign(new BlogDto(), query._doc);
  }

  private static removeMarkdown(content: string): string {
    return content
      .replaceAll(/<[^>]*>?/gm, '') //remove html tags
      .replaceAll(/^#+\s+/gm, '') // remove markdown headers
      .replaceAll(/\*\*([^*]+)\*\*|\*([^*]+)\*/g, '$1$2') //remove Markdown bold
      .replaceAll(/!\[([^\]]+)\]\(([^\)]+)\)/g, '$1') //remove Markdown images
      .replaceAll(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1') //remove Markdown links
      .replaceAll(/\n/g, ' ') //remove newlines
      .replaceAll(/```[\s\S]*?```/g, '') //remove code blocks
      .replaceAll('`', ''); //remove inline code quotes
  }
}
