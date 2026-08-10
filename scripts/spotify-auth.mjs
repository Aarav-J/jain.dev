// Gets a fresh Spotify refresh token via aaravj.xyz redirect.
// Usage: node scripts/spotify-auth.mjs
//
// PREREQUISITE: Add https://aaravj.xyz/callback in the Spotify Dashboard and SAVE.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as readline from 'node:readline';

const __dirname = dirname(fileURLToPath(import.meta.url));

const envPath = resolve(__dirname, '..', '.env');
const envRaw = readFileSync(envPath, 'utf-8');
const env = Object.fromEntries(
  envRaw.split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => {
      const [key, ...rest] = line.split('=');
      return [key.trim(), rest.join('=').trim().replace(/^"(.*)"$/, '$1')];
    })
);

const CLIENT_ID = env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.VITE_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://aaravj.xyz/callback';
const SCOPES = 'user-read-currently-playing';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing VITE_SPOTIFY_CLIENT_ID or VITE_SPOTIFY_CLIENT_SECRET in .env');
  process.exit(1);
}

const authUrl = 'https://accounts.spotify.com/authorize?' + new URLSearchParams({
  response_type: 'code',
  client_id: CLIENT_ID,
  scope: SCOPES,
  redirect_uri: REDIRECT_URI,
}).toString();

console.log('\n=== Step 1: Authorize ===\n');
console.log('Opening browser... If it does not open, visit:\n');
console.log(authUrl + '\n');
console.log('Log in and click "Agree". You will be redirected to aaravj.xyz/callback');
console.log('(which will likely 404 — that is fine).\n');
console.log('Copy the FULL URL from your address bar. It will look like:');
console.log('  https://aaravj.xyz/callback?code=AQB...longstring...\n');

import('node:child_process').then(({ exec }) => {
  const cmd = process.platform === 'darwin' ? 'open' :
              process.platform === 'win32' ? 'start' : 'xdg-open';
  exec(`${cmd} "${authUrl}"`);
});

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Paste the full redirect URL: ', async (rawUrl) => {
  rl.close();

  const url = new URL(rawUrl.trim());
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    console.error(`Authorization failed: ${error}`);
    process.exit(1);
  }

  if (!code) {
    console.error('No authorization code found. Make sure you pasted the full redirect URL.');
    process.exit(1);
  }

  console.log('\n=== Step 2: Exchanging code for tokens ===\n');

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
    });

    const data = await tokenResponse.json();

    if (data.error) throw new Error(`${data.error}: ${data.error_description}`);

    console.log('=== NEW REFRESH TOKEN ===\n');
    console.log(data.refresh_token);
    console.log('\nCopy this into .env:\n');
    console.log(`VITE_SPOTIFY_REFRESH_TOKEN="${data.refresh_token}"\n`);

    process.exit(0);
  } catch (err) {
    console.error('Token exchange failed:', err.message);
    process.exit(1);
  }
});
