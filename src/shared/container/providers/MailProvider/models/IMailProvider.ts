export default interface IUserTokensRepositoryIMailProvider {
  sendMail(to: string, body: string): Promise<void>;
}
