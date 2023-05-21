import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  public index() {
    return this.response({
      users: this.service.getUsers(),
    });
  }

  @Get(':id')
  public show(@Param('id') id: number) {
    return this.response({
      user: this.service.getUser(id),
    });
  }

  private response(data: any, message = 'Success') {
    return {
      message,
      data,
    };
  }
}
