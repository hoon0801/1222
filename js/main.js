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

    // 클릭시 이동
    let menu = $('.menu');
    let menuList = $('.menu a'); 
    let section = $('section');
    menuList.click(function(e){
        e.preventDefault();
        let i = $(this).index();
        let destination = section.eq(i+1).offset().top;
        $('html, body').stop()
        .animate({'scrollTop' : destination});
        $(this).addClass('blue').siblings().removeClass('blue');
    });
    // 클릭시 이동

    
    
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


let winWidth = $(window).width();
if(winWidth >= 1280){
    pc();
}else{
    mobile();
}
common();