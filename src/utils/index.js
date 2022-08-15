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
    req.headers['x-forwarded-for'] ||
    req.ip ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress ||
    req.connection?.remoteAddress
  );
}
module.exports = { getClientIp }