// utils/xhr.js
function xhrPromise(method, url, body = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    Object.entries(headers).forEach(([k, v]) => xhr.setRequestHeader(k, v));
    xhr.onload = () => (xhr.status >= 200 && xhr.status < 300)
      ? resolve(JSON.parse(xhr.responseText))
      : reject({ status: xhr.status, body: xhr.responseText });
    xhr.onerror = () => reject({ status: 0, message: "Erro de rede" });
    xhr.ontimeout = () => reject({ status: 0, message: "Timeout" });
    xhr.timeout = 10000;
    xhr.send(body ? JSON.stringify(body) : null);
  });
}
