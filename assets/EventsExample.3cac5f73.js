import{k as o,a as e,L as r,c as t,d as a,S as n}from"./trois.module.ad13c1cd.js";import{r as s,o as i,c as f,w as l,a as c}from"./app.39908f78.js";import"./OrbitControls.ee6c153c.js";const d={components:{Box:o,Camera:e,LambertMaterial:r,PointLight:t,Renderer:a,Scene:n},data:()=>({boxColor:"#ffffff"}),mounted(){const o=this.$refs.renderer,e=this.$refs.box.mesh;o.onBeforeRender((()=>{e.rotation.x+=.01}))},methods:{boxHover({over:o}){this.boxColor=o?"#ff0000":"#ffffff"},boxClick(o){alert("Click"),console.log(o)}}};d.render=function(o,e,r,t,a,n){const d=s("Camera"),m=s("PointLight"),x=s("LambertMaterial"),b=s("Box"),u=s("Scene"),C=s("Renderer");return i(),f(C,{ref:"renderer","mouse-over":"",click:""},{default:l((()=>[c(d,{position:{z:10}}),c(u,null,{default:l((()=>[c(m,{position:{y:50,z:50}}),c(b,{ref:"box",onHover:n.boxHover,onClick:n.boxClick,rotation:{y:Math.PI/4,z:Math.PI/4}},{default:l((()=>[c(x,{color:a.boxColor},null,8,["color"])])),_:1},8,["onHover","onClick","rotation"])])),_:1})])),_:1},512)};export default d;