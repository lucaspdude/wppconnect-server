import config from '../../../config';

const redis = config.tokenStoreType === 'redis' ? require('redis') : null;

let RedisClient: any = null;

if (config.tokenStoreType === 'redis') {
  RedisClient = redis.createClient({
    url: null,
    legacyMode: true,
  });
}

export default RedisClient;
