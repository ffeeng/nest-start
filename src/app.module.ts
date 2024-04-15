import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'feng',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      logging: 'all',
    }),
    UsersModule,
    CoreModule,
    CatsModule,
  ],
})
export class AppModule {}
