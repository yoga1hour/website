document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
  if(menu&&nav){menu.addEventListener("click",()=>nav.classList.toggle("open"));}
  const form=document.querySelector("[data-form]");
  if(form){form.addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(form);const text=[`Yoga 1 Hour Booking Enquiry`,`Name: ${fd.get("name")||""}`,`Phone: ${fd.get("phone")||""}`,`Email: ${fd.get("email")||""}`,`Location: ${fd.get("location")||""}`,`Session: ${fd.get("session")||""}`,`Preferred time: ${fd.get("time")||""}`,`Message: ${fd.get("message")||""}`].join("\n");window.open(`https://wa.me/917996666460?text=${encodeURIComponent(text)}`,"_blank","noopener");});}
});
