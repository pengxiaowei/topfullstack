import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { User } from '@libs/db/models/user.model';
import { InjectModel } from 'nestjs-typegoose'
import { ApiUseTags } from '@nestjs/swagger';


@Crud({
    model: User
})
@ApiUseTags('用户')
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model) { }

    @Get('option')
    option() {
        return {
            title: "用户管理",
            column: [
                {
                    label: "用户名称",
                    prop: "username"
                },
                // {
                //     label: "课程封面图",
                //     prop: "file"
                // }
            ]
        }
    }
}
