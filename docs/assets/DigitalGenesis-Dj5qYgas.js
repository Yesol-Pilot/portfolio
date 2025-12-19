import{r as t,X as V,aH as Z,aI as ee,e as x,p as _,o as T,s as te,$ as re,n as k,aJ as ne,k as S,Q as oe,z as A,aK as ie,M as ae,aL as se,j as f}from"./index-LI-KpOx_.js";import{s as W}from"./deprecated-C8-qPaWV.js";const ce=Z({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new k,sectionColor:new k,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new x,worldPlanePosition:new x},`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${re>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),le=t.forwardRef(({args:o,cellColor:i="#000000",sectionColor:n="#2080ff",cellSize:e=.5,sectionSize:r=1,followCamera:a=!1,infiniteGrid:c=!1,fadeDistance:g=100,fadeStrength:d=1,fadeFrom:l=1,cellThickness:h=.5,sectionThickness:y=1,side:p=te,...P},b)=>{V({GridMaterial:ce});const m=t.useRef(null);t.useImperativeHandle(b,()=>m.current,[]);const j=new ee,w=new x(0,1,0),s=new x(0,0,0);_(Y=>{j.setFromNormalAndCoplanarPoint(w,s).applyMatrix4(m.current.matrixWorld);const I=m.current.material,J=I.uniforms.worldCamProjPosition,X=I.uniforms.worldPlanePosition;j.projectPoint(Y.camera.position,J.value),X.value.set(0,0,0).applyMatrix4(m.current.matrixWorld)});const u={cellSize:e,sectionSize:r,cellColor:i,sectionColor:n,cellThickness:h,sectionThickness:y},v={fadeDistance:g,fadeStrength:d,fadeFrom:l,infiniteGrid:c,followCamera:a};return t.createElement("mesh",T({ref:m,frustumCulled:!1},P),t.createElement("gridMaterial",T({transparent:!0,"extensions-derivatives":!0,side:p},u,v)),t.createElement("planeGeometry",{args:o}))});var E={exports:{}},z,D;function ue(){if(D)return z;D=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return z=o,z}var F,G;function fe(){if(G)return F;G=1;var o=ue();function i(){}function n(){}return n.resetWarningCache=i,F=function(){function e(c,g,d,l,h,y){if(y!==o){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function r(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:i};return a.PropTypes=a,a},F}var O;function me(){return O||(O=1,E.exports=fe()()),E.exports}var de=me();const M=ne(de);M.func.isRequired,M.arrayOf(M.oneOfType([M.element,M.func])).isRequired;function pe(o){return typeof o=="function"}const q=new S,L=new S,R=[],C=new ae;class he extends ie{constructor(){super(),this.color=new k("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var i;return(i=this.instance.current)==null?void 0:i.geometry}raycast(i,n){const e=this.instance.current;if(!e||!e.geometry||!e.material)return;C.geometry=e.geometry;const r=e.matrixWorld,a=e.userData.instances.indexOf(this.instanceKey);if(!(a===-1||a>e.count)){e.getMatrixAt(a,q),L.multiplyMatrices(r,q),C.matrixWorld=L,e.material instanceof se?C.material.side=e.material.side:C.material.side=e.material[0].side,C.raycast(i,R);for(let c=0,g=R.length;c<g;c++){const d=R[c];d.instanceId=a,d.object=this,n.push(d)}R.length=0}}}const $=t.createContext(null),B=new S,U=new S,ge=new S,H=new x,N=new oe,K=new x,ye=o=>o.isInstancedBufferAttribute,Q=t.forwardRef(({context:o,children:i,...n},e)=>{t.useMemo(()=>V({PositionMesh:he}),[]);const r=t.useRef();t.useImperativeHandle(e,()=>r.current,[]);const{subscribe:a,getParent:c}=t.useContext(o||$);return t.useLayoutEffect(()=>a(r),[]),t.createElement("positionMesh",T({instance:c(),instanceKey:r,ref:r},n),i)}),xe=t.forwardRef(({context:o,children:i,range:n,limit:e=1e3,frames:r=1/0,...a},c)=>{const[{localContext:g,instance:d}]=t.useState(()=>{const s=t.createContext(null);return{localContext:s,instance:t.forwardRef((u,v)=>t.createElement(Q,T({context:s},u,{ref:v})))}}),l=t.useRef(null);t.useImperativeHandle(c,()=>l.current,[]);const[h,y]=t.useState([]),[[p,P]]=t.useState(()=>{const s=new Float32Array(e*16);for(let u=0;u<e;u++)ge.identity().toArray(s,u*16);return[s,new Float32Array([...new Array(e*3)].map(()=>1))]});t.useEffect(()=>{l.current.instanceMatrix.needsUpdate=!0});let b=0,m=0;const j=t.useRef([]);t.useLayoutEffect(()=>{j.current=Object.entries(l.current.geometry.attributes).filter(([s,u])=>ye(u))}),_(()=>{if(r===1/0||b<r){l.current.updateMatrix(),l.current.updateMatrixWorld(),B.copy(l.current.matrixWorld).invert(),m=Math.min(e,n!==void 0?n:e,h.length),l.current.count=m,W(l.current.instanceMatrix,{offset:0,count:m*16}),W(l.current.instanceColor,{offset:0,count:m*3});for(let s=0;s<h.length;s++){const u=h[s].current;u.matrixWorld.decompose(H,N,K),U.compose(H,N,K).premultiply(B),U.toArray(p,s*16),l.current.instanceMatrix.needsUpdate=!0,u.color.toArray(P,s*3),l.current.instanceColor.needsUpdate=!0}b++}});const w=t.useMemo(()=>({getParent:()=>l,subscribe:s=>(y(u=>[...u,s]),()=>y(u=>u.filter(v=>v.current!==s.current)))}),[]);return t.createElement("instancedMesh",T({userData:{instances:h,limit:e,frames:r},matrixAutoUpdate:!1,ref:l,args:[null,null,0],raycast:()=>null},a),t.createElement("instancedBufferAttribute",{attach:"instanceMatrix",count:p.length/16,array:p,itemSize:16,usage:A}),t.createElement("instancedBufferAttribute",{attach:"instanceColor",count:P.length/3,array:P,itemSize:3,usage:A}),pe(i)?t.createElement(g.Provider,{value:w},i(d)):o?t.createElement(o.Provider,{value:w},i):t.createElement($.Provider,{value:w},i))}),Me=({isFinished:o})=>{const i=t.useMemo(()=>{const n=[];for(let r=0;r<200;r++){const a=(Math.random()-.5)*30,c=(Math.random()-.5)*30;Math.abs(a)<2&&Math.abs(c)<2||n.push({position:[a,0,c],scale:[.5+Math.random(),2+Math.random()*8,.5+Math.random()],delay:Math.random()*2})}return n},[]);return _(n=>{const e=n.clock.getElapsedTime();n.camera.position.x=Math.sin(e*.2)*25,n.camera.position.z=Math.cos(e*.2)*25,n.camera.position.y=15,n.camera.lookAt(0,0,0)}),f.jsxs("group",{children:[f.jsx("ambientLight",{intensity:.5}),f.jsx("directionalLight",{position:[10,20,10],intensity:1,color:"#ffffff"}),f.jsx(le,{args:[50,50],cellSize:1,cellThickness:.5,cellColor:"#0044ff",sectionSize:5,sectionThickness:1,sectionColor:"#0088ff",fadeDistance:30}),f.jsxs(xe,{range:200,children:[f.jsx("boxGeometry",{args:[1,1,1]}),f.jsx("meshStandardMaterial",{color:"#00ffff",emissive:"#0044ff",emissiveIntensity:.5,roughness:.2,metalness:.8,transparent:!0,opacity:.8}),i.map((n,e)=>f.jsx(Pe,{data:n},e))]}),f.jsxs("mesh",{position:[0,5,0],children:[f.jsx("octahedronGeometry",{args:[2,0]}),f.jsx("meshBasicMaterial",{color:"#ffffff",wireframe:!0})]}),f.jsx("pointLight",{position:[0,5,0],intensity:5,color:"#00ffff",distance:20})]})},Pe=({data:o})=>{const i=t.useRef();return _(n=>{if(!i.current)return;const e=n.clock.getElapsedTime(),r=Math.min(1,Math.max(0,(e-o.delay)*1.5)),a=1-Math.pow(1-r,3),c=o.scale[1]*a;i.current.position.set(o.position[0],c/2,o.position[2]),i.current.scale.set(o.scale[0],c,o.scale[2])}),f.jsx(Q,{ref:i})};export{Me as default};
