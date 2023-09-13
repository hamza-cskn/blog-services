import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {BlogService} from './blog.service';
import {CreateBlogDto} from './dto/create-blog.dto';
import {UpdateBlogDto} from './dto/update-blog.dto';
import {TokenGuard} from "./token/token.guard";

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogsService: BlogService) {
  }

  @UseGuards(TokenGuard)
  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @UseGuards(TokenGuard)
  @Get()
  findAll(@Query('showUnverified') showUnverified = false,
          @Query('limit') limit = 50,
          @Query('offset') offset = 0,
          @Query('plainText') plainText) {
    plainText = plainText == `true`;
    return this.blogsService.findAll({showUnverified, plainText, pagination: {limit, offset}});
  }

  @UseGuards(TokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(id);
  }

  @UseGuards(TokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(id, updateBlogDto);
  }

  @UseGuards(TokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.delete(id);
  }
}
