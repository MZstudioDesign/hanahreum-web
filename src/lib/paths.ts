export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/hanahreum-web";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
