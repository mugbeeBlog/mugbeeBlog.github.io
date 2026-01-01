import { createClient } from 'microcms-js-sdk';

const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = import.meta.env;

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
  throw new Error(
    'microCMSの環境変数（MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY）が設定されていません。'
  );
}

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export const createMicroCMSLoader = (endpoint: string) => {
  return async () => {
    try {
      return await client.getAllContents({ endpoint });
    } catch (error) {
      console.error(
        `MicroCMSのエンドポイント取得に失敗しました: ${endpoint}`,
        error
      );
      throw new Error(`コンテンツの読み込みに失敗しました: ${endpoint}`);
    }
  };
};
