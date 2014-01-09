  (function(){

    /*1.所有元素全部加载完毕开发送基础数据*/
           // 用_代替_allyes
      var _ = _allyes;
      /*2.配置数据发送地址*/
      _.dataUrl = "http://10.200.33.28:8000/data.js" ;
      _.siteDomainName = 'http://www.weimob.com/';
      // 加载时发送基本信息
      _.sendBaseMessage({
         id:"_allyes_json",
         url:_.dataUrl,
         data:_.getBaseInfo()
      });
      // debugger;
      // alert("123");
       
    _.on(window,"resize",function(){
        _.sendBaseMessage({
         id:"_allyes_json",
         url:_.dataUrl,
         data:_.getBaseInfo()
      });
    });

   // _.interval(function(){
   //   _.sendBaseMessage({
   //       id:"_allyes_json",
   //       url:_.dataUrl,
   //       data:_.getBaseInfo()
   //    });
   //  },3000);

   
  })();
