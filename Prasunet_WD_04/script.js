let menubtn =document.getElementById('menubtn')

menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Software Developer!','Web-Developer!',''],
    typespeed: 100,
    backspeed: 100,
    backDelay: 3000,
    loop: true,
})