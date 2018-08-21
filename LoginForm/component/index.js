function show(){	
		console.log("123");
	var log=document.getElementsByClassName('logo')[0];
	var img=document.getElementsByClassName('logoimg')[0];
	var img=document.getElementsByClassName('logoimg')[0];
	var hide=document.getElementsByClassName('hide')[0];
    var span=document.getElementsByClassName('handl')[0];
	log.style.width="140px";
	log.style.height="150px";
	log.style.marginTop="30px";
	img.style.width="100px";
	img.style.height="100px";
	hide.style.display="block";
	span.style.display="none";

}

function hide(){
	var log=document.getElementsByClassName('logo')[0];
	var img=document.getElementsByClassName('logoimg')[0];
	var img=document.getElementsByClassName('logoimg')[0];
	var hide=document.getElementsByClassName('hide')[0];
	var span=document.getElementsByClassName('handl')[0];
	log.style.width="280px";
	log.style.height="300px";
	log.style.marginTop="1px";
	img.style.width="150px";
	img.style.height="150px";
	hide.style.display="none";
	span.style.display='block';
   
}