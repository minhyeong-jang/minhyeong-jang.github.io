var app = {};

app.ui = {
  contents:null,
  particlesArgs:[],
  animations: {
      preloaderanim: null,
      preloaderanimHide:null
  },
  navMenu:function(){
    $('#navbar .gnb a[href="'+$(location).attr('pathname')+'"]').addClass('active');

    $('#navbar .gnb a').click(function(e){
      e.preventDefault();
        if(!$(this).hasClass('active')){
          // if(app.ui.pageLoad($(this).attr('href'),$(this).attr('rel'))){
            $('#navbar .gnb a.active').removeClass('active');
            $(this).addClass('active');

            // 페이지 URL 변경
            window.history.pushState("", "", $(this).attr('href'));
          // }
      }
      return false;
    });



  },
  // pageLoad:function(url,rel){
  //   if (app.ajax !== null) {
  //     return false;
  //   }else {
  //     app.ui.preloader.preloaderInit(rel);
  //     app.ajax = $.ajax({
  //       type: 'GET', url: url+'?ajax=true'
  //     });

  //     app.ajax.done(function( msg ) {

  //       var cont = $(msg).filter("#page");
  //       app.ui.contents = cont.contents();
        
  //       app.ajax = null;
  //     });

  //     app.ajax.fail(function( jqXHR, textStatus ) {
  //       $("#page").html(errmsg);
  //     });
  //     return true;
  //   }
  // },
  // pageInit:function(rel){


  //     if(rel == 'index'){

  //         app.home.init();


  //     }else if(rel == 'about'){


  //         app.about.init();

  //     }else if(rel == 'skills'){


  //         app.skills.init();


  //     }else if(rel == 'gallery'){


  //         app.gallery.init();


  //     }else if(rel == 'contact'){


  //         app.contact.init();

  //     }

  // },
  // particle:false,
  // mobileMenu:function(){


  //     $('#mobile-link').click(function(){

  //         $('#nav_bar nav').toggleClass('show');

  //         return false;

  //     });

  // },
  // initAnimation:function(){

  //     app.ui.animations.preloaderanim = new TimelineMax().to(document.querySelector('.container'), 0.4 ,{immediateRender :false,opacity:0.2,scale:0.85,ease: Power4.easeOut}).fromTo(document.querySelector('.preloader'), 0.5 ,{immediateRender:false, x:'-100%',display:'none',ease: Power4.easeOut},{x:'0%',display:'block'},0.3).pause(),
  //     app.ui.animations.preloaderanimHide = new TimelineMax().fromTo(document.querySelector('.container'),0.5, {immediateRender :false,opacity:0,scale:0.85},{opacity:1,scale:1},0.3).fromTo( document.querySelector('.preloader'), 0.6 ,{immediateRender :false,x:'0%',ease: Power4.easeIn},{x:'100%', onComplete:function(){

  //         $('.progress-bar > span').text(0);
  //         $('.progress-bar > span').css('width', '0%');
  //         $('.progress-bar_bg div').css('width', '0%');
  //         $('.preloader').hide();

  //     }},0).pause()

  // }

}


// app.ui.preloader = {

//   checkProgress:function(rel){

//         if (app.ajax === null){

//       $("#page").html(app.ui.contents);
//       $('.container').removeClass('fadeIn');
//               app.ui.initAnimation();

//               //rozbicie watków zeby bylo to asynchronicznie bardziej

//               setTimeout(function(){
//                   app.ui.preloader.preloaderHide();
//               },30);
//               setTimeout(function(){
//         app.ui.pageInit(rel);
//               },10);
      
//     }else {
    
//       setTimeout(function(){
      
//        app.ui.preloader.checkProgress(rel);
      
//       },50);
    
    
    
//     }
// },
//   preloaderInit:function(rel){


//        app.ui.animations.preloaderanim.play(0).call(app.ui.preloader.preloaderCheckRequest, [rel]);
//        if(document.querySelector('.bg')){
//      TweenMax.to( $('.bg'), 0.4 ,{opacity:0.2,scale:0.85,ease: Power4.easeOut});
//    }
    

//   },
//   preloaderCheckRequest:function(rel){

//       $('.progress-bar_bg div').width();
//       var a = 0;
//       var loader = setInterval(function(){


//           ++a;
//           ++a;
//           ++a;
//           $('.progress-bar > span').text(a);
//           $('.progress-bar > span').css('width',a + '%');
//           $('.progress-bar_bg div').css('width',a + '%');

//           if(a >= 99){

//               clearInterval(loader);

//               //sprawdza czy ajax request sie skonczyl

//               app.ui.preloader.checkProgress(rel);




//           }

//       },25);
//   },
//   preloaderHide:function(rel){


//      app.ui.animations.preloaderanimHide.play();

//      if(document.querySelector('.bg')){
//      TweenMax.fromTo( $('.bg')[0], 0.5 ,{opacity:0.2,scale:0.85,ease: Power4.easeOut},{opacity:1,scale:1,delay:0.4});
//    }





//   }

// }




$(function () {

  if(requested != 'true') {
      app.ui.navMenu();

      // app.ui.mobileMenu();

      // app.ui.initAnimation();


  }
});







// var delay = (function(){
//   var timer = 0;
//   return function(callback, ms){
//       clearTimeout (timer);
//       timer = setTimeout(callback, ms);
//   };
// })();



// if(requested != 'true'){

//   if ($('.container.home-page').size() > 0) {
//       app.home.init();
//   }


//   if ($('.container.about').size() > 0) {

//       app.about.init();
//   }

//   if ($('.container.text-page').size() > 0) {

//       app.text.init();

//   }

//   if ($('.container.contact').size() > 0) {

//       app.contact.init();
//   }


//   if ($('.container.skills').size() > 0) {

//       app.skills.init();
//   }


//   if ($('.container.gallery').size() > 0) {

//       app.gallery.init();
//   }

//   TweenMax.to($('.container')[0], 0.4, {opacity: 1, ease: Power2.easeIn});
//   TweenMax.to($('#awwwards')[0], 0.4, {right: 0, delay: 0.9});

// }




// var debug = true;

// /* Progressive Web App init - Service Worker and cache */
// if ('serviceWorker' in navigator) {


//   navigator.serviceWorker
//       .register('/sw-lite.js')
//       .then(function(swRegistration){

//           var serviceWorker;

//           if(swRegistration.installing){
//               if(debug) {
//                   console.log('ServiceWorker:  Resolved at Installing');

//               }
//               serviceWorker = swRegistration.installing;

//           }else if(swRegistration.waiting){
//               if(debug) {
//                   console.log('ServiceWorker:  Resolved at Waiting');

//               }
//               serviceWorker = swRegistration.waiting;

//           }else if(swRegistration.active){
//               if(debug) {
//                   console.log('ServiceWorker:  Resolved at activated');

//               }
//               serviceWorker = swRegistration.active;
//           }

//           if(serviceWorker){

//               serviceWorker.addEventListener('statechange',function(e){
//                   if(debug) {
//                       console.log('ServiceWorker state change: ' + e.target.state);

//                   }
//               })

//           }




//       }).catch(function (err) {
//       console.log('Error occured', err);
//   });

//   //event fired when Service Worker controller change - sw.js


//   navigator.serviceWorker.addEventListener('controllerchange',function(e){
//       if(debug){ console.log('Controller Changed');}
//   });




// }

