// Encrypts the upcoming weeks into ahead.json for the passphrase-locked "Coming up" section (open the site with ?ahead).
// Usage:  AHEAD_PASS='<passphrase>' node tools/ahead.cjs < upcoming.json
// upcoming.json (never commit it): {"weeks":[{"w":31,"albums":[[31,"Blonde","Frank Ocean",2016,79,"1146195596"], ...],"note":"optional line, e.g. Show & Tell: Arianne's pick to come"}]}
const fs = require('fs');
const path = require('path');
const { webcrypto: crypto } = require('crypto');
(async () => {
  const pass = process.env.AHEAD_PASS;
  if (!pass) throw new Error('Set AHEAD_PASS');
  const data = JSON.parse(fs.readFileSync(0, 'utf8'));
  if (!Array.isArray(data.weeks)) throw new Error('Expected {"weeks":[...]}');
  const enc = new TextEncoder(), b64 = b => Buffer.from(b).toString('base64');
  const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 250000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(data)));
  const out = { v: 1, kdf: 'PBKDF2-SHA256', iter: 250000, salt: b64(salt), iv: b64(iv), ct: b64(new Uint8Array(ct)) };
  fs.writeFileSync(path.resolve(__dirname, '..', 'ahead.json'), JSON.stringify(out) + '\n');
  console.log(`ahead.json written: ${data.weeks.length} upcoming week(s)`);
})().catch(e => { console.error(e.message); process.exit(1); });
