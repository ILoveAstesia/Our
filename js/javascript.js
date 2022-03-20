	var navbor=document.getElementById("navbar");
		var menu=document.getElementById("menu");
		window.onscroll=function()
		{
			if(window.pageYOffset >= 200){
				navbor.classList.add("sticky");
			}
			else{
				navbor.classList.remove("sticky");
			}
		
		}
		window.onload=function(){
			document.getElementById("submenu1").hidden=true;
			document.getElementById("submenu2").hidden=true;
			document.getElementById("submenu3").hidden=true;
		}
		function drop_down1(){
			if(document.getElementById("submenu1").hidden===true)
				document.getElementById("submenu1").hidden=false;
				else
				document.getElementById("submenu1").hidden=true;
		}
		function drop_down2(){
			if(document.getElementById("submenu2").hidden===true)
				document.getElementById("submenu2").hidden=false;
				else
				document.getElementById("submenu2").hidden=true;
		}
		function drop_down3(){
			if(document.getElementById("submenu3").hidden===true)
				document.getElementById("submenu3").hidden=false;
				else
				document.getElementById("submenu3").hidden=true;
		}
		function checkpassword(){
			var password=document.getElementById('password').value;
			var repassword=document.getElementById('repassword').value;
			if(password==repassword){
				
				return true;
			}
			else if(password!=repassword){
				alert("密码不一致请重新输入")
				return false;
			}
		}
		function checkpassword2(){
			var password=document.getElementById('password2').value;
			var repassword=document.getElementById('repassword2').value;
			if(password==repassword){
				
				return true;
			}
			else if(password!=repassword){
				alert("密码不一致请重新输入")
				return false;
			}
		}