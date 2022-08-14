/**
 * 获取真实客户端 ip
 * @param req
 * @returns {*|string}
 */
function getClientIp(req) {
  if (!req) {
    return '';
  }
  return (
    req.connection?.remoteAddress ||
    req.headers['x-forwarded-for'] ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress ||
    req.ip
  );
}
module.exports = { getClientIp }