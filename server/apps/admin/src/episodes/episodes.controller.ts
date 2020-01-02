import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';
import { Course } from '@libs/db/models/course.model';

@Crud({
    model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>
    ) { }

    @Get('option')
    async option() {
        const courses = (await this.courseModel.find()).map(v => ({
            label: v.name,
            value: v._id
        }))
        return {
            title: "课时管理",
            translate: false,
            column: [
                {
                    label: "所属课程",
                    prop: "course",
                    type: 'select',
                    row: true,
                    dicData: courses,
                },
                {
                    label: "课时标题",
                    prop: "name",
                    span: 24
                },
                {
                    label: "视频文件",
                    prop: "file",
                    span: 24,
                    type: 'upload',
                    listType: 'picture-img',
                    action: '/upload',
                    width: 120
                },
            ]
        }
    }
}
