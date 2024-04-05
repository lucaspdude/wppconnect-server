export default {
  secretKey: process.env.SECURE_TOKEN,
  host: 'http://localhost',
  port: '21465',
  deviceName: 'WppConnect',
  poweredBy: 'WPPConnect-Server',
  startAllSession: true,
  tokenStoreType: process.env.TOKEN_STORE_TYPE ?? 'file',
  maxListeners: 15,
  customUserDataDir: './userDataDir/',
  webhook: {
    url: process.env.WEBHOOK_URL ?? null,
    autoDownload: true,
    uploadS3: false,
    readMessage: true,
    allUnreadOnStart: false,
    listenAcks: true,
    onPresenceChanged: true,
    onParticipantsChanged: true,
    onReactionMessage: true,
    onPollResponse: true,
    onRevokedMessage: true,
    onLabelUpdated: true,
    onSelfMessage: false,
    ignore: ['status@broadcast'],
  },
  websocket: {
    autoDownload: false,
    uploadS3: true,
  },
  chatwoot: {
    sendQrCode: true,
    sendStatus: true,
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 45,
  },
  log: {
    level: process.env.LOG_LEVEL ?? 'error', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file'],
  },
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
    ],
    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null,
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  db: {
    mongodbDatabase: process.env.MONGO_DATABASE,
    mongodbCollection: process.env.MONGO_COLLECTION,
    mongodbUser: process.env.MONGO_USER,
    mongodbPassword: process.env.MONGO_PASSWORD,
    mongodbHost: process.env.MONGO_HOST,
    mongoIsRemote: true,
    mongoURLRemote: process.env.MONGO_URL,
    mongodbPort: process.env.MONGO_PORT,
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    redisPassword: process.env.REDIS_PASSWORD,
    redisDb: 'default',
    redisPrefix: process.env.REDIS_PREFIX,
    redisURL: process.env.REDIS_URL,
  },
  aws_s3: {
    region: 'sa-east-1',
    access_key_id: process.env.BUCKET_KEY,
    secret_key: process.env.BUCKET_SECRET,
    defaultBucketName: process.env.BUCKET_NAME,
    endpoint: process.env.BUCKET_URL,
    forcePathStyle: null,
  },
};
