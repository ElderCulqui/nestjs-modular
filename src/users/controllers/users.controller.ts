import { Controller } from "@nestjs/common";
import { UsersService } from "../services/users.service";


@Controller('products')
export class UsersController {
  constructor(private usersService: UsersService) {}
}
