import { PrismaService } from './../prisma/prisma.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto/';
import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}
  async getBookmarks(userId: string) {
    return await this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  async getBookmarkById(userId: string, bookmarkId: string) {
    return await this.prisma.bookmark.findFirst({
      where: {
        userId,
        id: bookmarkId,
      },
    });
  }

  async createBookmark(userId: string, dto: CreateBookmarkDto) {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });
    return bookmark;
  }

  async editBookmark(userId: string, bookmarkId: string, dto: EditBookmarkDto) {
    try {
      const bookmark = await this.prisma.bookmark.findUnique({
        where: { id: bookmarkId },
      });

      if (!bookmark || bookmark.userId !== userId)
        throw new ForbiddenException('Access to ressources denied');

      return this.prisma.bookmark.update({
        where: { id: bookmarkId },
        data: { ...dto },
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteBookmark(userId: string, bookmarkId: string) {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: { id: bookmarkId },
    });

    if (!bookmark || bookmark.userId !== userId)
      throw new ForbiddenException('Access to ressources denied');

    await this.prisma.bookmark.delete({
      where: { id: bookmarkId },
    });
  }
}
