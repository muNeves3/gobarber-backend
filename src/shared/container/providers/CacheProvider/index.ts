import { container } from 'tsyringe';

import ICacheProvider from './models/ICacheProvider';

import RedisCachProvider from './implementations/RedisCachProvider';

const providers = {
  redis: RedisCachProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
