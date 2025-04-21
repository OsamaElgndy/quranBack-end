<<<<<<< HEAD
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
 async onModuleInit() {
  await this.$connect();
 }
=======
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
 async onModuleInit() {
  await this.$connect();
 }
>>>>>>> f9551bc4b50a955ffca4f5c268599bb9aa385532
} 