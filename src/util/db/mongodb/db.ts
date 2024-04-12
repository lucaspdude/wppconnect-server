//import mongoose from 'mongoose';
import config from '../../../config';

const mongoose =
  config.tokenStoreType === 'mongodb' ? require('mongoose') : null;

if (config.tokenStoreType === 'mongodb') {
  mongoose.Promise = global.Promise;

  mongoose.connect(config.db.mongoURLRemote, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default mongoose;
