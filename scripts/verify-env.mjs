#!/usr/bin/env node
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env.local');

console.log('--- KovilGo Environment Verification ---');

if (!existsSync(envPath)) {
  console.warn('[INFO] .env.local does not exist yet. Using build-safe fallback defaults.');
  console.log('[TIP] Copy .env.example to .env.local and add your development credentials.');
  process.exit(0);
}

const content = readFileSync(envPath, 'utf8');
const lines = content.split('\n');
let keysFound = 0;

for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
    keysFound++;
  }
}

console.log(`[SUCCESS] .env.local verified. ${keysFound} configuration variables configured.`);
