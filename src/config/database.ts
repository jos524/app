import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'DB.sqlite',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};