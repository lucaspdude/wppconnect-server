import config from '../../../config';

const redis = config.tokenStoreType === 'redis' ? require('redis') : null;

let RedisClient: any = null;

if (config.tokenStoreType === 'redis') {
  RedisClient = redis.createClient({
    url: config.db.redisURL,
    legacyMode: true,
  });
}

export default RedisClient;
