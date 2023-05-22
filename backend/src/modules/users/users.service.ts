import { faker } from '@faker-js/faker';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class UsersService {
  private users: UserModel[] = [];

  constructor() {
    this.generateFakedUsers(200);
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number): UserModel {
    const foundUser = this.users.find((item) => item.id === id);

    if (!foundUser) {
      throw new UnprocessableEntityException('User not found');
    }

    return foundUser;
  }

  private generateFakedUsers(numberOfUsers: number) {
    for (let index = 0; index < numberOfUsers; index++) {
      this.users.push(
        new UserModel(
          index + 1,
          faker.name.firstName(),
          faker.name.lastName(),
          faker.internet.email(),
          faker.image.urlLoremFlickr({ category: 'people' }),
        ),
      );
    }
  }
}
