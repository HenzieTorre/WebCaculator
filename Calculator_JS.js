function $(id){return document.getElementById(id);}
var π = 3.14159265;
var rd = false;
var str;
var result;
var p1, p2, p_result;
//按钮添加功能
function display(str0)	//显示到文本框
{
	str = document.getElementById("text");
	str.value = str.value + str0;
}
function equals()	//'=' 输出
{
	str = document.getElementById("text");
	expstr = String(str.value);

	angle();
	//查找计算幂部分并进行替换
	while (expstr.search(/(\S*)\^\((\S*)\)/) != -1) {
		contant = expstr.match(/([^\)]*)\^\(([^\)]*)\)/);
		expstr = expstr.replace(contant[0], String(Math.pow(parseFloat(contant[1]),parseFloat(contant[2]))));
	}

	//使用eval()函数进行计算
	result = eval(expstr);
	str.value = result;
}
function angle()
{
	//计算Rad模式的三角函数
	if(!rd){
		//查找计算sin部分并进行替换
		while (expstr.search(/sin\((\S*)\)/) != -1) {
			contant = expstr.match(/sin\(([^\)]*)\)/);
			expstr = expstr.replace(contant[0], String(Math.sin(eval(contant[1]) / 180 * Math.PI)));
		}
		//查找计算cos部分并进行替换
		while (expstr.search(/cos\((\S*)\)/) != -1) {
			contant = expstr.match(/cos\(([^\)]*)\)/);
			expstr = expstr.replace(contant[0], String(Math.cos(eval(contant[1]) / 180 * Math.PI)));
		}
		//查找计算tan部分并进行替换
		while (expstr.search(/tan\((\S*)\)/) != -1) {
			contant = expstr.match(/tan\(([^\)]*)\)/);
			expstr = expstr.replace(contant[0], String(Math.tan(eval(contant[1]) / 180 * Math.PI)));
		}
	}
	//计算Deg模式的三角函数
	else if(rd){
		//查找计算sin部分并进行替换
		while (expstr.search(/sin\((\S*)\)/) != -1) {
			contant = expstr.match(/sin\(([^\)]*)\)/);
			expstr = expstr.replace(contant[0], String(Math.sin(eval(contant[1]))));
		}
		//查找计算cos部分并进行替换
		while (expstr.search(/cos\((\S*)\)/) != -1) {
			contant = expstr.match(/cos\(([^\)]*)\)/);
			expstr = expstr.replace(contant[0], String(Math.cos(eval(contant[1]))));
		}
		//查找计算tan部分并进行替换
		while (expstr.search(/tan\((\S*)\)/) != -1) {
			contant = expstr.match(/tan\(([^\)]*)\)/);
			expstr = expstr.replace(contant[0], String(Math.tan(eval(contant[1]))));
		}
	}
}
function back()		//'←' 退格
{
	str = document.getElementById("text");
	str.value = str.value.substring(0,str.value.length-1);
}
function reset()	//'c' 清除
{
	str = document.getElementById("text");
	str.value = "";
}
function RD()
{
	const isrd = document.getElementById("rd");
	if(!rd){
		isrd.innerHTML="Deg";
	}
	else if(rd){
		isrd.innerHTML="Rad";
	}
	rd = !rd;
}

 
 
