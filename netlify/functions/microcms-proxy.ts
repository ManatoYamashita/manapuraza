import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

// 環境変数から取得（Netlify環境変数経由、クライアントに露出しない）
const API_ENDPOINT = process.env.MICROCMS_API_ENDPOINT;
const API_KEY = process.env.MICROCMS_API_KEY;

// CORS ヘッダー設定
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

// エラーレスポンス生成
const errorResponse = (statusCode: number, message: string) => ({
  statusCode,
  headers: CORS_HEADERS,
  body: JSON.stringify({ error: message }),
});

export const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // OPTIONSリクエスト対応（CORS preflight）
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  // GETリクエストのみ許可
  if (event.httpMethod !== 'GET') {
    return errorResponse(405, 'Method Not Allowed');
  }

  // 環境変数チェック
  if (!API_ENDPOINT || !API_KEY) {
    console.error('Missing environment variables');
    return errorResponse(500, 'Server configuration error');
  }

  try {
    // クエリパラメータからエンドポイントを取得
    const { endpoint, ...queryParams } = event.queryStringParameters || {};

    if (!endpoint) {
      return errorResponse(400, 'Missing endpoint parameter');
    }

    // microCMS APIエンドポイント構築
    const url = new URL(`${API_ENDPOINT}/${endpoint}`);
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.append(key, value);
      }
    });

    // microCMS API 呼び出し
    const response = await fetch(url.toString(), {
      headers: {
        'X-MICROCMS-API-KEY': API_KEY,
      },
    });

    if (!response.ok) {
      console.error('microCMS API Error:', response.status, response.statusText);
      return errorResponse(response.status, `microCMS API Error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=60', // Netlify Edge Cache: 60秒
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Function execution error:', error);
    return errorResponse(500, 'Internal server error');
  }
};
