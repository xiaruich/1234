function hyoji(){//表示する文字var str ="一文字ずつ表示します．";//テキストボックスの文字数var cnt = document.timer.moji.value.length;//文字が全部表示されているか確認
  if( con<11){//現在より1文字多く切り出して表示document.timer.moji.value=str.substr(0,cont+1);}
    else{//全て表示されたら、空文字入力戻すdosument.timer.moji.value="";}}
    function startnc(){//関数hyoji()を1000ミリ秒間隔で呼び出すsetlnterval("hoyji()",1000;}
