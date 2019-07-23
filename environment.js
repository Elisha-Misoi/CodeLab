import Constants from 'expo-constants';

const ENV = {
  dev: {
    FIRBSE_APIKEY: 'AIzaSyARbSvyWepB5hT7g66Y7si6snXt7kZKV1A',
    FIRBSE_AUTHDOMAIN: 'codelab-155a1.firebaseapp.com',
    FIRBSE_DATABASEURL: 'https://codelab-155a1.firebaseio.com',
    FIRBSE_PROJECTID: 'project-115472164341',
    FIRBSE_STORAGEBUCKET: 'codelab-155a1.appspot.com',
    FIRBSE_MESSAGINGSENDERID: '115472164341',
    GITHUB_APP_ID: '8e59ce086f6fdf66bcd4',
    GITHUB_SECRET: 'a415d7171690d7c5931481a3de105ea071ce2a35'
  },
  staging: {
    FIRBSE_APIKEY: 'AIzaSyARbSvyWepB5hT7g66Y7si6snXt7kZKV1A',
    FIRBSE_AUTHDOMAIN: 'codelab-155a1.firebaseapp.com',
    FIRBSE_DATABASEURL: 'https://codelab-155a1.firebaseio.com',
    FIRBSE_PROJECTID: 'project-115472164341',
    FIRBSE_STORAGEBUCKET: 'codelab-155a1.appspot.com',
    FIRBSE_MESSAGINGSENDERID: '115472164341',
    GITHUB_APP_ID: '8e59ce086f6fdf66bcd4',
    GITHUB_SECRET: 'a415d7171690d7c5931481a3de105ea071ce2a35'
  },
  prod: {
    FIRBSE_APIKEY: 'AIzaSyARbSvyWepB5hT7g66Y7si6snXt7kZKV1A',
    FIRBSE_AUTHDOMAIN: 'codelab-155a1.firebaseapp.com',
    FIRBSE_DATABASEURL: 'https://codelab-155a1.firebaseio.com',
    FIRBSE_PROJECTID: 'project-115472164341',
    FIRBSE_STORAGEBUCKET: 'codelab-155a1.appspot.com',
    FIRBSE_MESSAGINGSENDERID: '115472164341',
    GITHUB_APP_ID: '8e59ce086f6fdf66bcd4',
    GITHUB_SECRET: 'a415d7171690d7c5931481a3de105ea071ce2a35'
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
