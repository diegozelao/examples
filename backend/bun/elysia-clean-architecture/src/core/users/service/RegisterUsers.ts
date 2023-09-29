import UseCases from '../../shared/UseCases';
import Users from '../model/Users';
import RepositoryUsers from './RepositoryUsers';

type UsersProps = {
  name: string
  email: string
  password: string
}

export default class RegisterUsers implements UseCases<UsersProps, void> {
  constructor(private readonly repository: RepositoryUsers) {}

  async execute(data: UsersProps): Promise<void> {
    const { name, email, password } = data

    const usersExist = await this.repository.listPerEmail(email)
    if (usersExist) {
      throw new Error('Users already exist')
    }

    await this.repository.register({ name, email, password})
    
  }

}