import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypedConfigService } from 'src/config/typed-config.service';
import { User } from './user.entity';
import { AuthConfig } from 'src/config/auth.config';
import { AuthService } from './auth/auth.service';
import { PasswordService } from './password/password.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: TypedConfigService) => ({
        secret: config.get<AuthConfig>('auth')?.jwt.secret,
        signOptions: {
          expiresIn: config.get<AuthConfig>('auth')?.jwt.expiresIn,
        },
      }),
    }),
  ],
  controllers: [UsersController, AuthController],
  providers: [UserService, PasswordService, AuthService],
})
export class UsersModule {}
