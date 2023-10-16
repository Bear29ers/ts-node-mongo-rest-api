import crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config();

const { SECRET } = process.env;

// ランダムな128バイトでbase64のソルトを生成する
export const random = () => crypto.randomBytes(128).toString('base64');

// HMAC-SHA256アルゴリズムでソルトとパスワードを組み合わせたものをエンコードする
export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
