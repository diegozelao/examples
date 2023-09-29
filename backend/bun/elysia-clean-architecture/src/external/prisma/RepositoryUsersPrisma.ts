import { PrismaClient } from "@prisma/client";
import Users from "../../core/users/model/Users";
import RepositoryUsers from "../../core/users/service/RepositoryUsers";

export default class RepositoryUsersPrisma implements RepositoryUsers {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }


  listPerEmail(email: string): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: {
        email
      }
    })
  }
  listPerId(id: number): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: {
        id
      }
    })
  }
  async listAll(): Promise<Users[]> {
    return this.prisma.users.findMany()
  }
  register(users: Users): Promise<Users> {
    return this.prisma.users.create({ data: users })
  }
  private readonly users: any[] = []

}