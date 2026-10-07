import path from 'path';
import { Page } from '@playwright/test';

export function randomString(length = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function randomEmail(): string {
  return `test_${randomString(6)}@example.com`;
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getFilePath(filename: string): string {
  return path.resolve(__dirname, '..', 'test-data', filename);
}

export async function waitForDownload(page: Page) {
  const [download] = await Promise.all([
    page.waitForEvent('download'),
  ]);
  return download;
}
