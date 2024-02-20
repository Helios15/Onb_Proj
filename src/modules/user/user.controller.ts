import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  GetUsersDTO,
  NewUserDTO,
  ChangeUserInfoDTO as UpdateUserDTO,
} from 'src/_dtos/user.dto';
import { GetListResponse } from 'src/types/user.type';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-new')
  async createNewUser(@Body() payload: NewUserDTO): Promise<User> {
    return this.userService.createNewUser(payload);
  }

  @Get('get-users')
  async getListUsers(
    @Query() query: GetUsersDTO,
  ): Promise<GetListResponse<User>> {
    return this.userService.getUsers(query);
  }

  @Put('update-user/:userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() payload: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.updateUserInfo(userId, payload);
  }

  @Patch('modify-user/:userId')
  async modifyUser(
    @Param('userId') userId: string,
    @Body() payload: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.updateUserInfo(userId, payload);
  }

  @Delete('delete-user/:userId')
  async deleteUser(@Param('userId') userId: string): Promise<string> {
    return this.userService.deleteUser(userId);
  }
}
