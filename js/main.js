function mobile(){

    let winHeight = window.innerHeight;
    $('.s1 , .s3 , .s5').height(winHeight);
 
    let s4Height = window.innerHeight * 2;
    $('.s4').height(s4Height);

    // header
    let navSwitch = false;
    $('.navOpen').click(function(){
    
        navSwitch = !navSwitch;
    
        if(navSwitch == true){
           setTimeout(function(){
            $('nav div').css({
                'transform' : 'translateX(0)'
            })
           },200) 
        }else{
            setTimeout(function(){
                $('nav div').css({
                    'transform' : 'translateX(-100%)'
                })
               },500) 
        }
        $('nav').stop().slideToggle();
        $(this).toggleClass('close');
    
    });
    // header

     // s4
     const highlight = document.getElementById("highlight-style");

     gsap.registerPlugin(ScrollTrigger);
     
     gsap.utils.toArray(".text-highlight").forEach((highlight) => {
       ScrollTrigger.create({
         trigger: highlight,
         start: "-100px center",
         onEnter: () => highlight.classList.add("active")
       });
     });
     
     const setHighlightStyle = (value) =>
       document.body.setAttribute("data-highlight", value);
     
     highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
     
     setHighlightStyle(highlight.value);
     // s4
   
}//mobile

function pc(){
       // s4
    const highlight = document.getElementById("highlight-style");

    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".text-highlight").forEach((highlight) => {
      ScrollTrigger.create({
        trigger: highlight,
        start: "-100px center",
        onEnter: () => highlight.classList.add("active")
      });
    });
    
    const setHighlightStyle = (value) =>
      document.body.setAttribute("data-highlight", value);
    
    highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
    
    setHighlightStyle(highlight.value);
    // s4
}

function common(){

      // header 클릭시 이동
      let menuList = $('.menu a'); 
      let section = $('section');
      menuList.click(function(e){
          e.preventDefault();
          let i = $(this).index();
          let destination = section.eq(i+1).offset().top;
          $('html, body').stop()
          .animate({'scrollTop' : destination});
      });

      let aboutUs = $('.menu .about')
      let dd = $('#dd')
      aboutUs.click(function(e){
        e.preventDefault();
          let dest = dd.offset().top;
          $('html, body').stop()
          .animate({'scrollTop' : dest});
      })
      // header 클릭시 이동

    // $('nav .menu a').addEventListener("mouseover",function(){
    //     $(this).addClass('blue').siblings().removeClass('blue');
    // })

    $('nav .menu a').mousOver(function(){
        $(this).addClass('blue').siblings().removeClass('blue');
    })

    $('nav .menu a').click(function(){
        $(this).addClass('blue').siblings().removeClass('blue');
    })

   
}


let winWidth = $(window).width();

if(winWidth < 1280){

    mobile();

}else{

    pc();
}


common();



$(window).resize(function(){

  let winWidth2 = $(window).width();

if(winWidth2 < 1280){
setTimeout(function(){
  location.reload();
  },500)
  mobile();

}else{
  setTimeout(function(){
      location.reload();
  },500)
  pc();
}



})
