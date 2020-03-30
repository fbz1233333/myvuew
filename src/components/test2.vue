<template>
  <div>
    <canvas ref='shape-canvas'></canvas>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        canvas:null, // canvas元素
        background:'#222',
        width:800, // canvas宽度
        height:600, // canvas高度
        ctx:null , // canvas的绘制上下文
        input:'HELLO!', // 输入的内容
        grid:10 , // 栅格间距（取样点的间距）
        point:{
          maxR:6.5 , // 粒子的最大半径
          minR:0.5 , // 粒子的最小半径
          step:0.15, // 例子动画半径的改变量,初始标准值
          colors:['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722']  // 预定一些较好的颜色
        },
        points:[] , // 所有的粒子
        oldPoints:[] , // 旧有的粒子
      }
    },
    methods:{
      init(){
        this.canvas=this.$refs['shape-canvas']
        this.canvas.width=this.width
        this.canvas.height=this.height
        this.canvas.style.background=this.background
        if (this.canvas.getContext){
          this.ctx=this.canvas.getContext('2d')
        }else {
          console.log('不支持')
        }
      },
      do1() {
        var ctx=this.ctx
        var data = this.ctx.getImageData(0,0,this.width,this.height) ;
        let data32 = new Uint32Array(data.data.buffer) ;
        console.log('data32',data32)
      }
    },
    mounted () {
      this.init()
      this.do1()
    }
  }
</script>
<style scoped>
</style>
