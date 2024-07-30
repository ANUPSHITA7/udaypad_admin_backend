import { Module } from '@nestjs/common';
import { TransectionsService } from './transections.service';
import { TransectionsController } from './transections.controller';

@Module({
  controllers: [TransectionsController],
  providers: [TransectionsService],
})
export class TransectionsModule {}
