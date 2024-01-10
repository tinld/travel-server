/**
 * Created by bioz on 1/13/2017.
 */

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  // allow log level -> 0: disable, 1 -> error, 2 -> debug, 3 -> info
  autoAnalyseSystem: true,
  crontabAnalyzeSystem: '*/30 * * * * *',
  enableLog: 4,
  // allow automatically creating folder when init
  autoCreateFolder: true,
  // allow automatically clean tmp folder in period
  autoCleanTmp: false,
  // period for cleaning tmp folder: every 6 hours
  crontabCleanTmp: '0 0 */6 * * *',
  // login token expired time
  tokenLoginExpiredDays: '25 days',
  // temporal token (for reset password, verify email) expired time
  tokenTmpExpiredDays: '1 days',
  port: process.env.NODE_PORT || 5000,
  apiUrl: process.env.API_ROOT_URL,
  // web client url
  webUrl: process.env.WEB_ROOT_URL,
  storageUrl: process.env.STORAGE_ROOT_URL,
  jwtAuthKey: 'fdhjfdfuejfkjdhfaueyruesfhjs',
  internalServerKey: 'fdhjfdfuejfkjiuhhhgtwckkusfhjs',
  sockIOAuthKey: 'fhskjfenfnhpploemjase',
  paths: {
    public: '/public',
    tmp: '/tmp',
    storage: '/storage/',
    avatar: '/public/avatar',
    docs: '/docs',
    jobs: '/app/jobs',
  },
  DBConnectors: {
    host: '127.0.0.1',
    port: '3306',
    username: 'admin',
    password: 'Leductin123456@',
    database: 'travel',
    dialect: 'mysql',
  },
};
