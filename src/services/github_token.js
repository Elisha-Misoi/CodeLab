import { AuthSession } from 'expo';
const REDIRECT_URL = AuthSession.getRedirectUrl();
<<<<<<< HEAD
import getEnvVars from '../../environment';
const { GITHUB_APP_ID, GITHUB_SECRET } = getEnvVars();
=======
import { GITHUB_APP_ID, GITHUB_SECRET } from 'react-native-dotenv';
>>>>>>> [Finishes #167284916] added login page

const github = {
  id: GITHUB_APP_ID,
  secret: GITHUB_SECRET
};

const githubFields = [
  'user',
  'public_repo',
  'repo',
  'repo_deployment',
  'repo:status',
  'read:repo_hook',
  'read:org',
  'read:public_key',
  'read:gpg_key'
];

function authUrlWithId(id, fields) {
  return (
    `https://github.com/login/oauth/authorize` +
    `?client_id=${id}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}` +
    `&scope=${encodeURIComponent(fields.join(' '))}`
  );
}

async function createTokenWithCode(code) {
  const url =
    `https://github.com/login/oauth/access_token` +
    `?client_id=${github.id}` +
    `&client_secret=${github.secret}` +
    `&code=${code}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return res.json();
}

async function getGithubTokenAsync() {
  try {
    const { type, params } = await AuthSession.startAsync({
      authUrl: authUrlWithId(github.id, githubFields)
    });
<<<<<<< HEAD
    if (type !== 'success') {
      return null;
    }
=======
    console.log('getGithubTokenAsync: A: ', { type, params });
    if (type !== 'success') {
      return null;
    }

>>>>>>> [Finishes #167284916] added login page
    if (params.error) {
      const { error, error_description, error_uri } = params;
      if (error === 'redirect_uri_mismatch') {
        console.warn(
          `Please set the "Authorization callback URL" in your Github application settings to ${REDIRECT_URL}`
        );
      }
      throw new Error(`Github Auth: ${error} ${error_description}`);
    }

    const { token_type, scope, access_token } = await createTokenWithCode(
      params.code
    );
<<<<<<< HEAD

=======
    console.log('getGithubTokenAsync: B: ', {
      token_type,
      scope,
      access_token
    });
>>>>>>> [Finishes #167284916] added login page
    return access_token;
  } catch ({ message }) {
    throw new Error(`Github Auth: ${message}`);
  }
}

export default getGithubTokenAsync;
