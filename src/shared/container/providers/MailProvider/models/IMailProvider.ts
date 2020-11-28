import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IUserTokensRepositoryIMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
