import { Controller,Get,Post, Put,Delete } from '@nestjs/common';
import { UserService } from './user.service';
import {user} from '@prisma/client'
// localhost:3000/user/get-user
@Controller('/user')
export class UserController {
    constructor(private userService:UserService){}
    // read
    @Get()
    getUser():Promise<user[]>{
        return this.userService.getUser()
    }

    // Get
    @Get("/:id")
    getUserById(){
        return "Get user by id"
    }

    // Post
    @Post()
    createUser(){
        return "create user"
    }

    // Put
    @Put("/:id")
    updateUser(){
        return "update user"
    }

    // Delete
    @Delete("/:id")
    removeUser(){
        return "remove User"
    }


}
