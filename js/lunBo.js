;(function($){
$.fn.createLun=function(){
    var parent=this;
    var time=null
    var index=0;
    var flag=1;
    var touchStart=0;
    var touchend=0;
    var prev=$(parent).parent(".section-content").next().find(".prev");
    var next=$(parent).parent(".section-content").next().find(".next");
    if(Array.prototype.slice.call(arguments,0)[0]){
      var el=Array.prototype.slice.call(arguments,0)[0].pagination  
    }
    console.log(Array.prototype.slice.call(arguments,0)[0])
   // var el=Array.prototype.slice.call(arguments,0)[0].length>0 ?  Array.prototype.slice.call(arguments,0)[0].pagination : null;
   
    var active={
        slider:function(index){
          console.log($(parent).next(".rbslider-pagination").find(".rbslider-pagination-bullet"))
           $(parent).next(".rbslider-pagination").find(".rbslider-pagination-bullet").removeClass("active");
           $(parent).css("transform","translateX(-"+index*33.6+"%)");
           $(parent).next(".rbslider-pagination").find(".rbslider-pagination-bullet").eq(index).addClass("active");
        },
        pagination:function(){
            var len= $(parent).find("li").length || 0
           var dom=""
           for(var a=0;a<len;a++){
            if(a==0){
                
                dom+="<span class='rbslider-pagination-bullet active'></span>"
            }else{
                dom+="<span class='rbslider-pagination-bullet '></span>"
            }
           }
          
            $(el).html(dom)
           
        },
        huadong:function(){

        }

    }
    if(el){
        //$(el).wraper("<ul></ul>")
        active.pagination()
    }
    console.log(el)
    prev.on('click',function(){
      if(index==0){
          return;
      }
       index--
        active.slider(index)
    })
    next.on('click',function(){
        index==length ?  index-- : index++
        active.slider(index)
    })

    
    var length= $(parent).find("li").length-1;
    init()
    $(parent).find("li").eq(0).addClass("activeIndex");
    $(parent).css("translation","all 2s");
    console.log(parent.prototype)
    function init (){
        // time=setInterval(function(){
        //      if(index>=length){
        //        flag=-1
        //      }else if(index==0){
        //       flag=1
        //      }
        //    index=index+flag;
        //    active.slider(index)
        //  },2000)
        $(parent).on('touchstart',function(e) {
            var _touch = e.originalEvent.targetTouches[0];
            touchStart= _touch.pageX;
        });
         
        $(parent).on('touchmove',function(e) {
            var _touch = e.originalEvent.targetTouches[0];
        });
         
        $(parent).on('touchend',function(e) {
            var _touch = e.originalEvent.changedTouches[0];
            touchend= _touch.pageX;
            if(touchend-touchStart<-100){  //向左滑
              clearInterval(time);
              if(index>=length){
                  return;
              }
              index++
              active.slider(index)
            }
            if(touchend-touchStart>100){//向右滑
                if(index==0){
                    return;
                }
                index--
                active.slider(index)
                //clearInterval(parent.prototype.time);
            }
        })
       
    }
  


}

})(jQuery)