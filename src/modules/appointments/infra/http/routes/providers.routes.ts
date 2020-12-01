/* eslint-disable camelcase */
import { Router } from 'express';

import EnsureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();

providersRouter.use(EnsureAuthenticated);

const providersController = new ProvidersController();

providersRouter.get('/', providersController.index);

export default providersRouter;
