
/* كلمة السر /
function checkPass(){
    let pass="1234";
    if(document.getElementById("password").value===pass){
        document.getElementById("lockScreen").style.display="none";
        document.getElementByById
        document.getElementById("card").style.display="block";
    }else{
        alert("غلط 😂💛");
    }
}

/ فتح الصفحة الثانية /
function openSecond(){
    document.getElementById("second").style.display="flex";
    launchFireworks();
}
function closeSecond(){
    document.getElementById("second").style.display="none";
}

/ ألعاب نارية متحركة /
function launchFireworks(){
    let canvas=document.getElementById("fireworks");
    let ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    let particles=[];
    for(let i=0;i<120;i++){
        particles.push({
            x:canvas.width/2,
            y:canvas.height/2,
            radius:2,
            angle:Math.random()2Math.PI,
            speed:Math.random()5+2
        });
    }

    function animate(){
        ctx.fillStyle="rgba(0,0,0,0.2)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        particles.forEach(p=>{
            p.x+=Math.cos(p.angle)p.speed;
            p.y+=Math.sin(p.angle)p.speed;
            ctx.fillStyle="gold";
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}
