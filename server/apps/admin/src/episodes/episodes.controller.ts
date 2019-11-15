import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';

@Crud({
    model: Episode
})
@Controller('episodes')
@ApiUseTags('课时')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
    ) { }
    
    @Get('option')
    option() {
        return {
            title: "课时管理",
            column: [
                {
                    label: "课时标题",
                    prop: "name"
                },
                // {
                //     label: "课程封面图",
                //     prop: "file"
                // }
            ]
        }
    }
}
