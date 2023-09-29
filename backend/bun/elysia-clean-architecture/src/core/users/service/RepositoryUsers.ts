import Users from "../model/Users"


export default interface RepositoryUsers {
  listAll(): Promise<Users[]>
  listPerId(id: number): Promise<Users | null>
  listPerEmail(email: string): Promise<Users | null>
  register(users: Partial<Users>): Promise<Users>
}