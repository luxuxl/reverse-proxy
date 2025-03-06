// 修改成想要代理的网站
const TELEGRAPH_URL = 'https://start.me';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  // 去除主机名前的 http(s)
  url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');
  // 设置路径
  url.pathname = "/p/ogJxA0";

  const modifiedRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: 'follow'
  });

  const response = await fetch(modifiedRequest);
  const modifiedResponse = new Response(response.body, response);

  // 添加允许跨域访问的响应头
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');

  return modifiedResponse;
}
