import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainersModule } from './trainers/trainers.module';
import { ClassesModule } from './classes/classes.module';
import { InvoicesModule } from './invoices/invoices.module';
import { TransectionsModule } from './transections/transections.module';

@Module({
  imports: [TrainersModule, ClassesModule, InvoicesModule, TransectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
