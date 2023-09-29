
export default interface UseCases<Req, Res> {
  execute(data: Req): Promise<Res>
}