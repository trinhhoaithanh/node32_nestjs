import { Injectable } from '@nestjs/common';

import { PrismaClient ,user} from '@prisma/client';
@Injectable()
export class UserService {
    prisma = new PrismaClient();
    async getUser():Promise<user[]>{ 
        let data = await this.prisma.user.findMany();
        return data
    }
}
