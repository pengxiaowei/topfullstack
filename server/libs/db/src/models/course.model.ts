import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true }, //定义虚拟字段需要这么写
  },
})
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string;

  //虚拟字段
  @arrayProp({
    ref: 'Episode',
    localField: '_id',
    foreignField: 'course',
  })
  episodes: Ref<Episode>[];
}
