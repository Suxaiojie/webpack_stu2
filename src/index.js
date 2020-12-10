import index from './css/index.css';
import abc from './less/index.less';
import jp1 from './images/1.jpg';
import jp2 from './images/rss.png';
import scss from './scss/index.scss';
var img2 = document.createElement("img");
img2.src = jp1;
document.body.appendChild(img2);

var img3 = document.createElement("img");
img3.src = jp2;
document.body.appendChild(img3);
// import alerter from './alerter';//导入 alerter js模块
// alerter();
// animate();

var arr = [10,20,30,40];
arr.forEach((i,v)=>{
    console.log(i,v);
})