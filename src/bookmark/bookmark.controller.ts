import { EditBookmarkDto } from './dto/editBookmark.dto';
import { CreateBookmarkDto } from './dto/createBookmark.dto';
import { BookmarkService } from './bookmark.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard/';
import { GetUser } from '../auth/decorator/';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private BookmarkService: BookmarkService) {}
  @Get()
  getBookmarks(@GetUser('id') userId: string) {
    return this.BookmarkService.getBookmarks(userId);
  }

  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId: string,
    @Param('id') bookmarkId: string,
  ) {
    return this.BookmarkService.getBookmarkById(userId, bookmarkId);
  }

  @Post()
  createBookmark(
    @GetUser('id') userId: string,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.BookmarkService.createBookmark(userId, dto);
  }

  @Patch(':id')
  editBookmark(
    @GetUser('id') userId: string,
    @Param('id') bookmarkId: string,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.BookmarkService.editBookmark(userId, bookmarkId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteBookmark(
    @GetUser('id') userId: string,
    @Param('id') bookmarkId: string,
  ) {
    return this.BookmarkService.deleteBookmark(userId, bookmarkId);
  }
}
