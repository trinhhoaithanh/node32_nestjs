import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CongviecModule } from './congviec/congviec.module';

@Module({
  imports: [UserModule, CongviecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
