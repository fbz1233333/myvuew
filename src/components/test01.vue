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
        background:'white',
        width:800, // canvas宽度
        height:600, // canvas高度
        ctx:null , // canvas的绘制上下文
        time:0 //当前时间

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
      drawCircle(x,y,r){
        this.ctx.beginPath()
        this.ctx.arc(x,y,r,0,Math.PI*2)
        this.ctx.stroke()
      },
      drawAll(circleList){

        setInterval(()=>{

          this.time++
          this.ctx.clearRect(0,0,this.width,this.height)

          for (let i=0;i<circleList.length;i++){
            let circle=circleList[i]
            // console.log(circle)
            // console.log(this.time)
            let rr=(Math.sin(Math.PI*(circle.d/circle.T+this.time/circle.T))+1)*circle.r/2
            // console.log(rr)
            this.drawCircle(circle.x,circle.y,rr)
          }
        },20)
      }
    },
    mounted () {
      this.init()
      let circleList=[
        {
          x:20,
          y:20,
          r:10,
          T:20,
          d:4
        },
        {
          x:30,
          y:40,
          r:5,
          T:20,
          d:10
        },
        {
          x:40,
          y:60,
          r:10,
          T:20,
          d:-6
        }
      ]

      this.drawAll(circleList)

    }
  }
</script>
<style scoped>
</style>
