import utils from './utils'

var baseUrl = "http://szwdtx.cn/wangda/";

if (utils.getUrlPram().evn == "staging") {
  baseUrl = "localhost:8080/"
}

var https = {
  videos: baseUrl + "news/queryAll.action"
}

module.exports = https
