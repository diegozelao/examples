import Users from "../../core/users/model/Users";
import RepositoryUsers from "../../core/users/service/RepositoryUsers";

export default class RepositoryUsersMemory implements RepositoryUsers {
  private readonly users: Users[] = []
  async listPerId(id: number): Promise<Users | null> {
    return await this.users.find((users) => users.id === id) ?? null;
  }
  
  async listAll(): Promise<Users[]> {
    return await this.users
  }

  async register(users: Users): Promise<Users> {
    const newUser = {
      ...users,
      id: Math.random(),
      createAt: new Date(),
      updateAt: new Date()
    }
    this.users.push(newUser)
    return newUser
  }

  async listPerEmail(email: string): Promise<Users | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }
}