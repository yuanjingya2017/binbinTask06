var jstext = document.querySelector('.js-textarea');
var jsinsert = document.querySelector('#insert');
var jssearch = document.querySelector('#search');
var jskeyWord = document.querySelector('#keyWord');
var jscontainer = document.querySelector('#container');
var data = [];
var arr = [];
jsinsert.onclick = function () {
    var words = jstext.value;
    words = words.replace(/[^0-9a-zA-Z]/g,' ');//要是不是方括号里面开头就替换为' '
    arr = words.split(' ');
    for(var i=0;i<arr.length;i++){
        var div = document.createElement('div');
        div.innerHTML = arr[i];
        jscontainer.appendChild(div);
        data.push(arr[i]);
    }
};
jssearch.onclick = function () {
    var value = jskeyWord.value;
    if(value&&value.trim()){
        jscontainer.innerHTML = data.map(function (t) {
            console.log(t)
            var newword = t.replace(new RegExp(value,'g'),'<span class="found">'+value+'</span>');
            return '<div>'+newword+'</div>';
        }).join('');
    }
    else {
        alert('请输入数据！数据只能为数字和字母！');
    }
};