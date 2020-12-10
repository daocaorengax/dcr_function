
/**字符串 */
  /**
   * 截取字符串长度
   * @param {*} str 字符串
   * @param {*} len 截取长度
   */
  function Cutstr(str, len) {
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;
    var strre = "";
    for (var i = 0; i < str.length; i++) {
      if (icount < len - 1) {
        temp = str.substr(i, 1);
        if (patrn.exec(temp) == null) {
          icount = icount + 1
        } else {
          icount = icount + 2
        }
        strre += temp
      } else {
        break
      }
    }
    return strre + (str.length>len ? "..." : "")
  }

/**数组 */


