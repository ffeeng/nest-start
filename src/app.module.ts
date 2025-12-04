import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { CoreModule } from './core/core.module';
import { CatsModule } from './cats/cats.module';
import { DocModule } from './docs/doc.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      logging: 'all',
    }),
    UserModule,
    DocModule,
    CoreModule,
    CatsModule,
  ],
})
export class AppModule {}
