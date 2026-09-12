document.addEventListener("DOMContentLoaded",()=>{
  const COOKIE_KEY="yoga1hour_cookie_consent";
  const cookieBanner=document.getElementById("cookie-banner");
  const cookieAccept=cookieBanner?.querySelector("[data-cookie-accept]");
  const cookieDecline=cookieBanner?.querySelector("[data-cookie-decline]");
  const hideCookieBanner=()=>{if(cookieBanner) cookieBanner.hidden=true;};
  const saveCookieChoice=(value)=>{try{localStorage.setItem(COOKIE_KEY,value);}catch(e){} hideCookieBanner();};
  let cookieChoice=null;
  try{cookieChoice=localStorage.getItem(COOKIE_KEY);}catch(e){}
  if(cookieBanner && !cookieChoice) cookieBanner.hidden=false;
  cookieAccept?.addEventListener("click",()=>saveCookieChoice("accepted"));
  cookieDecline?.addEventListener("click",()=>saveCookieChoice("declined"));
  const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
  if(menu&&nav){
    menu.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      menu.setAttribute("aria-expanded",String(open));
      menu.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");
    });
    nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
      nav.classList.remove("open"); menu.setAttribute("aria-expanded","false"); menu.setAttribute("aria-label","Open navigation menu");
    }));
  }
  const form=document.querySelector("[data-form]");
  if(form){form.addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(form);const text=[`Yoga 1 Hour Booking Enquiry`,`Name: ${fd.get("name")||""}`,`Phone: ${fd.get("phone")||""}`,`Email: ${fd.get("email")||""}`,`Location: ${fd.get("location")||""}`,`Session: ${fd.get("session")||""}`,`Preferred time: ${fd.get("time")||""}`,`Message: ${fd.get("message")||""}`].join("\n");window.open(`https://wa.me/917996666460?text=${encodeURIComponent(text)}`,"_blank","noopener");});}
});
