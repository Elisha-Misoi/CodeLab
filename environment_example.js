import Constants from 'expo-constants';

const ENV = {
  dev: {
    FIRBSE_APIKEY: '',
    FIRBSE_AUTHDOMAIN: '',
    FIRBSE_DATABASEURL: '',
    FIRBSE_PROJECTID: '',
    FIRBSE_STORAGEBUCKET: '',
    FIRBSE_MESSAGINGSENDERID: '',
    GITHUB_APP_ID: '',
    GITHUB_SECRET: ''
  },
  staging: {
    FIRBSE_APIKEY: '',
    FIRBSE_AUTHDOMAIN: '',
    FIRBSE_DATABASEURL: '',
    FIRBSE_PROJECTID: '',
    FIRBSE_STORAGEBUCKET: '',
    FIRBSE_MESSAGINGSENDERID: '',
    GITHUB_APP_ID: '',
    GITHUB_SECRET: ''
  },
  prod: {
    FIRBSE_APIKEY: '',
    FIRBSE_AUTHDOMAIN: '',
    FIRBSE_DATABASEURL: '',
    FIRBSE_PROJECTID: '',
    FIRBSE_STORAGEBUCKET: '',
    FIRBSE_MESSAGINGSENDERID: '',
    GITHUB_APP_ID: '',
    GITHUB_SECRET: ''
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
