import { Response, Request } from 'express';

import { container } from 'tsyringe';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    // exibição do perfil
    const user_id = request.user.id;

    const showProfileService = container.resolve(ShowProfileService);

    const user = await showProfileService.execute({ user_id });

    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name, email, password, old_password } = request.body;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      user_id: userId,
      name,
      email,
      password,
      old_password,
    });

    delete user.password;

    return response.json(user);
  }
}
