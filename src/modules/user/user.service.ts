import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ChangeUserInfoDTO as ChangedUserInfoDTO,
  GetUsersDTO,
  NewUserDTO,
} from 'src/_dtos/user.dto';
import { exclude } from 'src/utils/exclude';
import { GetListResponse } from './../../types/user.type';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly user: Model<User>) {}

  async createNewUser(payload: NewUserDTO): Promise<User> {
    return await new this.user({
      ...payload,
    }).save();
  }

  async findUserById(userId: string): Promise<User> {
    const user = await this.user.findById({ _id: userId });
    if (!user)
      throw new NotFoundException(`Could not find user with _id ${userId}.`);
    return user;
  }

  async getUsers(payload: GetUsersDTO): Promise<GetListResponse<User>> {
    const { page, limit } = payload;
    const filterOptions = {
      ...exclude(payload, ['page', 'limit']),
      isDeleted: false,
    };
    const { name, age } = filterOptions;

    const [users, total] = await Promise.all([
      this.user
        .find(filterOptions)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ age: 1, createdAt: -1 }),
      this.user.find(filterOptions).countDocuments({}),
    ]);

    return {
      data: users,
      total: total,
      page: page,
      limit: limit,
      name: name,
      age: age,
    };
  }

  async updateUserInfo(
    userId: string,
    { name, age }: ChangedUserInfoDTO,
  ): Promise<User> {
    const updatedUser = await this.findUserById(userId);
    if (name) {
      updatedUser.name = name;
    }
    if (age) {
      updatedUser.age = age;
    }
    await updatedUser.save();
    return updatedUser;
  }

  async deleteUser(userId: string): Promise<string> {
    const deletedUser = await this.findUserById(userId);
    deletedUser.isDeleted = true;
    deletedUser.save();
    return `Successfully deleted user with _id ${userId}`;
  }
}
