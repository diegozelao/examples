import RegisterUsers from "./core/users/service/RegisterUsers";
import RegisterUsersController from "./adapters/RegisterUserController";
import RepositoryUsersPrisma from "./external/prisma/RepositoryUsersPrisma";
import ListUsers from "./core/users/service/ListUsers";
import ListUsersControler from "./adapters/ListUserController";
import ListUserPerId from "./core/users/service/ListUserPerId";
import ListUserPerIdController from "./adapters/ListUserPerIdControler";
import app from "./external/api/config";

// ------ Rotas
const repositoryUser = new RepositoryUsersPrisma()
const registerUser = new RegisterUsers(repositoryUser)

new RegisterUsersController(app, registerUser)


// ------ Consults

const listUsers = new ListUsers(repositoryUser)
new ListUsersControler(app, listUsers)

const listUserPerId = new ListUserPerId(repositoryUser)

new ListUserPerIdController(app, listUserPerId)

app.get("/", () => "Hello Elysia")


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
