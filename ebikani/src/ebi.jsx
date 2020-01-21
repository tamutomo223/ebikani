import React from 'react';
import "./ebi.css"

class Ebi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents : [{name: "海老",num:0},{name: "蟹",num:1},{name: "オマール",num:0},{name: "タラバ",num:1},
                  {name:"伊勢",num:0},{name:"ブラックタイガー",num:0},{name:"ロブスター",num:0},{name:"シュリンプ",num:0},
                  {name:"ズワイ",num:1},{name:"越前",num:1},{name:"しゃぶしゃぶ",num:1},{name:"北海道",num:1},
                  {name:"鯛を釣る",num:0},{name:"フライ",num:0},{name:"車",num:0},{name:"蛯",num:0},{name:"横歩き",num:1},
                  {name:"毛",num:1},{name:"カニカマ",num:1},{name:"club",num:1},{name:"カニ",num:1},{name:"エビ",num:0},
                  {name:"寿司の定番",num:0},{name:"ザリガニっぽいの",num: 0},{name:"星座",num:1}],
      start: false,
      next:false,
      answer:"",
      total:0
    };
  }

start(){
  this.setState({start: true})
}  
ebi(content){
  var num = content.num
  if (num == 0){
    var total = this.state.total
    this.setState({next:true,answer:"ok",total:total + 1})
  }
  else{
    this.setState({next:true,answer:"ng"})
  }
}
kani(content){
  var num = content.num
  if (num == 1){
    var total = this.state.total
    this.setState({next:true,answer:"ok",total:total + 1})
  }
  else{
    this.setState({next:true,answer:"ng"})
  }
}

back(){
  window.location.reload();
}

render(){
  if(this.state.next){
    var contents = this.state.contents
    var content =  contents[Math.floor(Math.random() * contents.length)];
    var contentName = `「${content.name}」は？`
    var btn = (
      <div className="button">
      <button className = "ebibtn" onClick={()=>{this.ebi(content)}}><img src ="febi.png"/></button>
      <button className = "kanibtn" onClick={()=>{this.kani(content)}}><img src ="kani.png"/></button>
      </div>
    )
  }
  else if (this.state.start){
    var contents = this.state.contents
    var content =  contents[Math.floor(Math.random() * contents.length)];
    var contentName = `「${content.name}」は？`
    var btn = (
      <div className="button">
      <button className = "ebibtn" onClick={()=>{this.ebi(content)}}><img src ="febi.png"/></button>
      <button className = "kanibtn" onClick={()=>{this.kani(content)}}><img src ="kani.png"/></button>
      </div>
    )
  }else {
    var startbtn = (<button className="startbtn" onClick={()=>{this.start()}}>スタート</button>)
  }

  if (this.state.answer == "ok"){
    var result = (<div className="result ok">正解</div>)
  }
  else if (this.state.answer == "ng"){
    var total = this.state.total
    var result = (<div className="result ng">
      <div className="ngtitle">残念、不正解</div>
      <div className="total">あなたの正解数は{total}です！</div>
      <button className="back" onClick={()=>
      {this.back()
      }}>トップに戻る</button>
      </div>)
  }
  else{
    var result = (<div className="result ok"></div>)
  }
  
  return(
    <div className="wrapper">
      <header>
        甲殻類分別君
      </header>
      <div className="start">
        {startbtn}
      </div>
      <div className="center">
        {result}
        <div className="content">
          {contentName}
        </div>
          {btn}
          
      </div>
    </div>
  );
}
}
export default Ebi;