var startBtn = document.getElementById("btn");
var quit = document.getElementById('btnquit');
var box = document.getElementById('box');
var flagBox = document.getElementById('flagBox');
var alertBox = document.getElementById('alertBox');
var alertImg = document.getElementById('alertImg');
var closeBtn = document.getElementById('close');
var minesNum;
var mineOver;
var block;
var mineMap=[];
var startGameBool = true;

bindEvent();

	function bindEvent(){
		//退出程序
		quit.onclick = function (){
		closeBtn.onclick();
		}
		startBtn.onclick = function(){
			if(startGameBool){
              box.style.display = 'block';
              flagBox.style.display ="block";
              init();
              startGameBool = false;
            }
		}
		// 取消右键默认事件
		box.oncontextmenu = function (){
			return false;
		}
		//鼠标落下，判断是点击左键还是右键--
		box.onmousedown = function (e) {
			var event = e.target;
             if(e.which ==1){
                 leftClick(event);
             }else if(e.which == 3){
             	rightClick(event);
             }
		}
		closeBtn.onclick = function (){
			alertBox.style.display="none";
			flagBox.style.display ='none';
			box.style.display = 'none';
			box.innerHTML="";
			startGameBool = true;
		}
	}

function init(){
	minesNum = 10;
	mineOver = 10 ;
	youFlag=0;
    score.innerHTML = mineOver;
	 for(var i = 0 ; i < 10 ; i ++){
	 	for(var j = 0 ; j < 10 ; j ++){
	 		var con = document.createElement('div');
	 		con.classList.add('block');
	 		con.setAttribute('id',i + '-' + j);
	 		box.appendChild(con);
            mineMap.push({mine:0});
	 	}
	 }
    block = document.getElementsByClassName('block');

     while(minesNum){
			var mineIndex = Math.floor(Math.random()*100);
			if(mineMap[mineIndex].mine === 0){
				mineMap[mineIndex].mine = 1;
				block[mineIndex].classList.add('isLei');
                minesNum--;

			}
	       block[mineIndex].classList.add('isLei');   
	         }
}

function leftClick(dom){
	if(dom.classList.contains('flag')){
		return;
	}
	var isLei = document.getElementsByClassName('isLei');
	if(dom && dom.classList.contains('isLei')){
		//一点就是雷的情况--
		console.log('gameOver');
		for(var i = 0 ; i < isLei.length; i ++){
			isLei[i].classList.add('show');
		}
		//延时在弹出结束--
		setTimeout(function(){
           alertBox.style.display = 'block';
           alertImg.style.backgroundImage = 'url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533648493032&di=7bdd1cdf95f74bd8c7cfb9a86be0e9fc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd043ad4bd11373f01df51fb9ae0f4bfbfaed04c9.jpg")';     
		},800)
	}else{
	   var n = 0;
	   var posArr = dom && dom.getAttribute('id').split('-');
			var posX = posArr && +posArr[0];
			 var posY = posArr && +posArr[1];
				   dom && dom.classList.add('num');
				   // 显示雷的个数，遍历点击格子附近的八个格子。
				   for(var i = posX - 1; i <= posX + 1; i ++){
				   	 for(var j = posY -1; j <= posY +1; j ++){
				   	 	var  aroundBox = document.getElementById(i + '-' + j);
				   	 	if(aroundBox && aroundBox.classList.contains('isLei')){
				   	 		n++;
			   	     	}
			   	   }
			    }
          dom && (dom.innerHTML = n);//写入数字
          //如果有n为0时，在对周围的八个小格子遍历。
          if(n==0){
                 for(var i = posX - 1; i <= posX + 1; i ++){
		        	 for(var j = posY -1; j <= posY +1; j ++){  
                       var nearBox = document.getElementById(i + '-' + j);
                         if(nearBox && nearBox.length !=0){ 
                             if(!nearBox.classList.contains('check')){
			                    	nearBox.classList.add('check');
			                    	leftClick(nearBox);
                  }
                }
              }
		   	}
          }
	}

}
//右击的效果和作用

function rightClick(dom){
	no=0;
	if(dom.classList.contains('num')){
		return;
	}
	dom.classList.add('flag');
	if(dom.classList.contains('isLei') && dom.classList.contains('flag')){
		 mineOver--;	
	if(dom.classList.contains('isLei') &&  !dom.classList.contains('flag')){
		mineOver++;
	}
}
	score.innerHTML = mineOver;
	if(mineOver == 0){
   		alertBox.style.display = 'block';
		alertImg.style.backgroundImage = 'url("http://bpic.588ku.com/element_origin_min_pic/18/06/10/1d65a89d9c325992b7280e695679fdc1.jpg")';
        no++;

	}

}
