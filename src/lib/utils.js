module.exports = {
  getUrlPram: function() {
    var url = location.search;
    var thisParam = new Object();
    // 判断是否存在请求的参数
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        thisParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return thisParam;
  }
}
