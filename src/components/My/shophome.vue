<template>
  <div>
       <div class="btn-file-box pos-rel">
      <input type="file" id="upload" name="upload"  style="font-size: 0;opacity: 0;width: 100%;height: 100%;position: absolute;left: 0;top: 0;"/>
        <span class="btn ">选择文件</span>
 </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
    $("#upload").on("change", function() {
      $.ajaxFileUpload({
        url: "http://cloud.eyun.online:9080/file/api/ossUpload", //后台请求地址
        type: "post", //请求方式  当要提交自定义参数时，这个参数要设置成post
        secureuri: false, //是否启用安全提交，默认为false。
        fileElementId: "upload", // 需要上传的文件域的ID，即<input type="file">的ID。
        dataType: "json", //服务器返回的数据类型。可以为xml,script,json,html。如果不填写，jQuery会自动判断。如果json返回的带pre,这里修改为json即可解决。
        success: function(res) {
          //提交成功后自动执行的处理函数，参数data就是服务器返回的数据。
          console.log(res)
         // alert(json.retMsg);
        },
        error: function(json, status, e) {
          //提交失败自动执行的处理函数。
        }
      });
    });
  }
};
</script>

