import { PartialType } from '@nestjs/mapped-types';
import { CreateTeatcherDto } from './create-teatcher.dto';

export class UpdateTeatcherDto extends PartialType(CreateTeatcherDto) {}
