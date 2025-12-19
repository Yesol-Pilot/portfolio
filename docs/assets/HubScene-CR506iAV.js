import{I as he,F as Y,b as W,c as C,W as me,d as V,S as oe,e as S,f as xe,U as Z,g as K,h as ae,M as ve,i as U,L as ge,k as ye,l as Se,r as l,m as be,n as k,o as F,p as z,q as E,j as n,A as Q,s as we,D as q,t as $,u as le,v as Ee,x as je}from"./index-LI-KpOx_.js";import{B as _e}from"./Billboard-DKpfDPvD.js";import{H as ce}from"./Html-DSAyQE1A.js";import{v as de,E as Le}from"./Environment-5ZIyXIoe.js";import{F as Me}from"./Float-DG87c6ev.js";import{T as Ae}from"./Text-KN1bA1w-.js";import{C as Re}from"./Cloud-CCv-X7yT.js";import"./deprecated-C8-qPaWV.js";const ue=de>=125?"uv1":"uv2",ee=new V,P=new S;class X extends he{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Y(e,3)),this.setAttribute("uv",new Y(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new W(t,6,1);return this.setAttribute("instanceStart",new C(i,3,0)),this.setAttribute("instanceEnd",new C(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const s=new W(i,t*2,1);return this.setAttribute("instanceColorStart",new C(s,t,0)),this.setAttribute("instanceColorEnd",new C(s,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new me(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new V);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ee.setFromBufferAttribute(t),this.boundingBox.union(ee))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oe),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,d=e.count;r<d;r++)P.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(P)),P.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(P));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class fe extends X{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,s=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)s[2*r]=e[r],s[2*r+1]=e[r+1],s[2*r+2]=e[r+2],s[2*r+3]=e[r+3],s[2*r+4]=e[r+4],s[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)s[2*r]=e[r],s[2*r+1]=e[r+1],s[2*r+2]=e[r+2],s[2*r+3]=e[r+3],s[2*r+4]=e[r+4],s[2*r+5]=e[r+5],s[2*r+6]=e[r+6],s[2*r+7]=e[r+7];return super.setColors(s,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class J extends xe{constructor(e){super({type:"LineMaterial",uniforms:Z.clone(Z.merge([K.common,K.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${de>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const N=new U,te=new S,ne=new S,p=new U,h=new U,b=new U,G=new S,H=new ye,m=new ge,se=new S,T=new V,I=new oe,w=new U;let j,A;function ie(o,e,t){return w.set(0,0,-e,1).applyMatrix4(o.projectionMatrix),w.multiplyScalar(1/w.w),w.x=A/t.width,w.y=A/t.height,w.applyMatrix4(o.projectionMatrixInverse),w.multiplyScalar(1/w.w),Math.abs(Math.max(w.x,w.y))}function Be(o,e){const t=o.matrixWorld,i=o.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,d=Math.min(i.instanceCount,s.count);for(let a=0,u=d;a<u;a++){m.start.fromBufferAttribute(s,a),m.end.fromBufferAttribute(r,a),m.applyMatrix4(t);const v=new S,x=new S;j.distanceSqToSegment(m.start,m.end,x,v),x.distanceTo(v)<A*.5&&e.push({point:x,pointOnLine:v,distance:j.origin.distanceTo(x),object:o,face:null,faceIndex:a,uv:null,[ue]:null})}}function Oe(o,e,t){const i=e.projectionMatrix,r=o.material.resolution,d=o.matrixWorld,a=o.geometry,u=a.attributes.instanceStart,v=a.attributes.instanceEnd,x=Math.min(a.instanceCount,u.count),f=-e.near;j.at(1,b),b.w=1,b.applyMatrix4(e.matrixWorldInverse),b.applyMatrix4(i),b.multiplyScalar(1/b.w),b.x*=r.x/2,b.y*=r.y/2,b.z=0,G.copy(b),H.multiplyMatrices(e.matrixWorldInverse,d);for(let y=0,_=x;y<_;y++){if(p.fromBufferAttribute(u,y),h.fromBufferAttribute(v,y),p.w=1,h.w=1,p.applyMatrix4(H),h.applyMatrix4(H),p.z>f&&h.z>f)continue;if(p.z>f){const c=p.z-h.z,g=(p.z-f)/c;p.lerp(h,g)}else if(h.z>f){const c=h.z-p.z,g=(h.z-f)/c;h.lerp(p,g)}p.applyMatrix4(i),h.applyMatrix4(i),p.multiplyScalar(1/p.w),h.multiplyScalar(1/h.w),p.x*=r.x/2,p.y*=r.y/2,h.x*=r.x/2,h.y*=r.y/2,m.start.copy(p),m.start.z=0,m.end.copy(h),m.end.z=0;const B=m.closestPointToPointParameter(G,!0);m.at(B,se);const O=Se.lerp(p.z,h.z,B),M=O>=-1&&O<=1,D=G.distanceTo(se)<A*.5;if(M&&D){m.start.fromBufferAttribute(u,y),m.end.fromBufferAttribute(v,y),m.start.applyMatrix4(d),m.end.applyMatrix4(d);const c=new S,g=new S;j.distanceSqToSegment(m.start,m.end,g,c),t.push({point:g,pointOnLine:c,distance:j.origin.distanceTo(g),object:o,face:null,faceIndex:y,uv:null,[ue]:null})}}}class pe extends ve{constructor(e=new X,t=new J({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let d=0,a=0,u=t.count;d<u;d++,a+=2)te.fromBufferAttribute(t,d),ne.fromBufferAttribute(i,d),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+te.distanceTo(ne);const r=new W(s,2,1);return e.setAttribute("instanceDistanceStart",new C(r,1,0)),e.setAttribute("instanceDistanceEnd",new C(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;j=e.ray;const d=this.matrixWorld,a=this.geometry,u=this.material;A=u.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),I.copy(a.boundingSphere).applyMatrix4(d);let v;if(i)v=A*.5;else{const f=Math.max(s.near,I.distanceToPoint(j.origin));v=ie(s,f,u.resolution)}if(I.radius+=v,j.intersectsSphere(I)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),T.copy(a.boundingBox).applyMatrix4(d);let x;if(i)x=A*.5;else{const f=Math.max(s.near,T.distanceToPoint(j.origin));x=ie(s,f,u.resolution)}T.expandByScalar(x),j.intersectsBox(T)!==!1&&(i?Be(this,t):Oe(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(N),this.material.uniforms.resolution.value.set(N.z,N.w))}}class Ce extends pe{constructor(e=new fe,t=new J({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Ue=l.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:s,lineWidth:r,segments:d,dashed:a,...u},v){var x,f;const y=be(M=>M.size),_=l.useMemo(()=>d?new pe:new Ce,[d]),[L]=l.useState(()=>new J),B=(i==null||(x=i[0])==null?void 0:x.length)===4?4:3,O=l.useMemo(()=>{const M=d?new X:new fe,D=e.map(c=>{const g=Array.isArray(c);return c instanceof S||c instanceof U?[c.x,c.y,c.z]:c instanceof ae?[c.x,c.y,0]:g&&c.length===3?[c[0],c[1],c[2]]:g&&c.length===2?[c[0],c[1],0]:c});if(M.setPositions(D.flat()),i){t=16777215;const c=i.map(g=>g instanceof k?g.toArray():g);M.setColors(c.flat(),B)}return M},[e,d,i,B]);return l.useLayoutEffect(()=>{_.computeLineDistances()},[e,_]),l.useLayoutEffect(()=>{a?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[a,L]),l.useEffect(()=>()=>{O.dispose(),L.dispose()},[O]),l.createElement("primitive",F({object:_,ref:v},u),l.createElement("primitive",{object:O,attach:"geometry"}),l.createElement("primitive",F({object:L,attach:"material",color:t,vertexColors:!!i,resolution:[y.width,y.height],linewidth:(f=s??r)!==null&&f!==void 0?f:1,dashed:a,transparent:B===4},u)))});function ze(o,e){const t=o+"Geometry";return l.forwardRef(({args:i,children:s,...r},d)=>{const a=l.useRef(null);return l.useImperativeHandle(d,()=>a.current),l.useLayoutEffect(()=>void e?.(a.current)),l.createElement("mesh",F({ref:a},r),l.createElement(t,{attach:"geometry",args:i}),s)})}const R=ze("sphere"),Pe=()=>{const o=l.useRef(),e=l.useRef();z(s=>{const r=s.clock.getElapsedTime();o.current&&(o.current.rotation.y=r*.05),e.current&&e.current.scale.setScalar(1.2+Math.sin(r*1.5)*.05)});const t=new k(E.SECTORS.PROFILE.visual.color),i=new k(E.SECTORS.PROFILE.visual.color).multiplyScalar(2);return n.jsxs("group",{children:[n.jsx(R,{ref:o,args:[1.5,64,64],children:n.jsx("meshStandardMaterial",{color:t,emissive:t,emissiveIntensity:1,roughness:.1,metalness:.8,toneMapped:!1})}),n.jsx("pointLight",{distance:20,intensity:5,color:t}),n.jsxs("mesh",{ref:e,scale:[1.2,1.2,1.2],children:[n.jsx("sphereGeometry",{args:[1.5,32,32]}),n.jsx("meshBasicMaterial",{color:i,transparent:!0,opacity:.15,side:we,blending:Q})]}),n.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[n.jsx("ringGeometry",{args:[2.5,2.6,64]}),n.jsx("meshBasicMaterial",{color:i,transparent:!0,opacity:.1,side:q,blending:Q})]})]})},Te=({color:o})=>{const e=l.useRef();return z(()=>{e.current&&(e.current.rotation.y-=.005,e.current.rotation.z+=.002)}),n.jsxs("group",{ref:e,children:[n.jsx(R,{args:[1,32,32],children:n.jsx("meshPhysicalMaterial",{roughness:0,transmission:1,thickness:2,color:o,ior:1.5,clearcoat:1})}),n.jsxs("mesh",{scale:.6,children:[n.jsx("icosahedronGeometry",{args:[1,0]}),n.jsx("meshStandardMaterial",{color:"#ffffff",emissive:o,emissiveIntensity:2,wireframe:!0})]})]})},Ie=({color:o})=>{const e=l.useRef();return n.jsxs("group",{children:[n.jsxs(R,{args:[1,32,32],ref:e,children:[" ",n.jsx("meshStandardMaterial",{color:o,emissive:o,emissiveIntensity:.2,roughness:.7,metalness:.3})]}),n.jsx($,{count:50,scale:2.5,size:3,speed:.4,opacity:.5,color:"#ccffcc"})]})},De=({color:o})=>{const e=l.useRef(),t=l.useRef();return z(i=>{const s=i.clock.getElapsedTime();e.current&&(e.current.rotation.y=s*.1),t.current&&(t.current.rotation.y=s*-.2)}),n.jsxs("group",{children:[n.jsx(R,{ref:t,args:[.7,32,32],children:n.jsx("meshStandardMaterial",{color:o,emissive:o,emissiveIntensity:.5})}),n.jsx(R,{ref:e,args:[1,32,32],children:n.jsx("meshPhysicalMaterial",{color:o,transparent:!0,opacity:.4,roughness:1,thickness:1,transmission:.2})}),n.jsxs("mesh",{rotation:[Math.PI/3,0,0],children:[n.jsx("ringGeometry",{args:[1.4,1.8,64]}),n.jsx("meshBasicMaterial",{color:o,transparent:!0,opacity:.3,side:q})]})]})},Ne=({color:o})=>{const e=l.useRef();return z(t=>{e.current&&Math.random()>.95?e.current.visible=!e.current.visible:e.current&&(e.current.visible=!0)}),n.jsxs("group",{children:[n.jsx(R,{ref:e,args:[.9,16,16],children:n.jsx("meshStandardMaterial",{color:o,wireframe:!0,emissive:o,emissiveIntensity:2})}),n.jsx($,{count:20,scale:2,size:5,speed:2,color:"red"})]})},Ge=({type:o,color:e})=>{switch(o){case"Crystalline Planet":return n.jsx(Te,{color:e});case"Living Planet":return n.jsx(Ie,{color:e});case"Gas Giant":return n.jsx(De,{color:e});case"Fractured Moon":return n.jsx(Ne,{color:e});default:return n.jsx(R,{args:[1],children:n.jsx("meshStandardMaterial",{color:e})})}},He=({lab:o,config:e})=>{const t=l.useRef(),i=l.useRef(),s=le(u=>u.startWarp),{playClick:r,playHover:d}=Ee(),[a]=l.useState(()=>Math.random()*Math.PI*2);return z(u=>{const v=u.clock.getElapsedTime(),x=e.speedOffset*.2,f=a+v*x;if(t.current){const y=Math.cos(f)*e.xRadius,_=Math.sin(f)*e.zRadius;i.current.position.set(y,0,_)}}),n.jsxs("group",{ref:t,rotation:e.inclination,children:[n.jsxs("mesh",{rotation:[-Math.PI/2,0,0],children:[n.jsx("ringGeometry",{args:[e.xRadius,e.xRadius+.05,64]}),n.jsx("meshBasicMaterial",{color:e.color,opacity:.1,transparent:!0,side:q})]}),n.jsxs("group",{ref:i,onClick:u=>{u.stopPropagation(),r(),s(e.target)},onPointerEnter:u=>{u.stopPropagation(),d(),document.body.style.cursor="pointer"},onPointerLeave:()=>{document.body.style.cursor="auto"},children:[n.jsx(Ge,{type:o.visual.type,color:o.visual.color}),n.jsx(_e,{position:[0,-1.5,0],children:n.jsx(We,{text:o.name,color:e.color})})]})]})},We=({text:o,color:e})=>n.jsx(ce,{transform:!0,center:!0,distanceFactor:10,style:{pointerEvents:"none"},children:n.jsx("div",{className:"px-2 py-1 text-xs font-bold font-mono tracking-widest border border-white/20 bg-black/50 backdrop-blur-sm rounded whitespace-nowrap",style:{color:e,textShadow:`0 0 10px ${e}`},children:o})}),ke=()=>{const o=[{lab:E.SECTORS.LAB_01,config:{target:"lab01",color:E.SECTORS.LAB_01.visual.color,xRadius:6,zRadius:6,inclination:[0,0,0],speedOffset:1}},{lab:E.SECTORS.LAB_02,config:{target:"lab02",color:E.SECTORS.LAB_02.visual.color,xRadius:9,zRadius:9,inclination:[Math.PI/8,0,0],speedOffset:.7}},{lab:E.SECTORS.LAB_03,config:{target:"lab03",color:E.SECTORS.LAB_03.visual.color,xRadius:12,zRadius:12,inclination:[-Math.PI/12,0,0],speedOffset:.5}},{lab:E.SECTORS.LAB_04,config:{target:"lab04",color:E.SECTORS.LAB_04.visual.color,xRadius:15,zRadius:15,inclination:[Math.PI/6,0,Math.PI/12],speedOffset:1.2}}];return n.jsxs("group",{children:[n.jsx("group",{onClick:()=>le.getState().setScene("profile"),children:n.jsx(Pe,{})}),o.map((e,t)=>n.jsx(He,{lab:e.lab,config:e.config},t))]})},Fe=({position:o,label:e})=>n.jsxs("group",{position:o,children:[n.jsxs("mesh",{children:[n.jsx("sphereGeometry",{args:[.05,16,16]}),n.jsx("meshBasicMaterial",{color:"#ffffff",toneMapped:!1})]}),n.jsxs("mesh",{scale:[1.5,1.5,1.5],children:[n.jsx("sphereGeometry",{args:[.05,16,16]}),n.jsx("meshBasicMaterial",{color:"#06b6d4",transparent:!0,opacity:.3,toneMapped:!1})]}),n.jsx(Me,{speed:2,rotationIntensity:0,floatIntensity:.5,children:n.jsx(Ae,{position:[.2,.2,0],fontSize:.2,color:"rgba(255,255,255,0.5)",color:"rgba(255,255,255,0.5)",anchorX:"left",anchorY:"bottom",children:e})})]}),re=({points:o,color:e="#06b6d4"})=>{const t=l.useMemo(()=>o.map(i=>new S(...i.position)),[o]);return n.jsxs("group",{children:[n.jsx(Ue,{points:t,color:e,opacity:.1,transparent:!0,lineWidth:1}),o.map((i,s)=>n.jsx(Fe,{position:i.position,label:i.label},s))]})},Ve=()=>{const o=l.useRef();z(i=>{o.current&&(o.current.rotation.y=i.clock.getElapsedTime()*.01)});const e=[{label:"REACT",position:[-15,5,-10]},{label:"THREE.JS",position:[-12,8,-8]},{label:"NEXT.JS",position:[-10,4,-12]},{label:"TYPESCRIPT",position:[-14,2,-9]}],t=[{label:"WEBGL",position:[10,6,-15]},{label:"GLSL",position:[13,3,-12]},{label:"BLENDER",position:[8,-2,-10]},{label:"R3F",position:[15,8,-14]}];return n.jsxs("group",{ref:o,children:[n.jsx(re,{points:e,color:"#06b6d4"}),n.jsx(re,{points:t,color:"#7c3aed"})]})},qe=()=>n.jsxs(ce,{fullscreen:!0,style:{pointerEvents:"none"},children:[n.jsx("div",{className:"hidden md:block absolute top-8 right-8 w-64 font-mono text-cyan-500/80",children:n.jsxs("div",{className:"border border-cyan-500/30 bg-black/40 backdrop-blur-md p-4 rounded-lg",children:[n.jsx("h3",{className:"text-xs uppercase tracking-[0.2em] border-b border-cyan-500/30 pb-2 mb-2",children:"System Status"}),n.jsxs("div",{className:"space-y-1 text-[10px] leading-relaxed opacity-80",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"STABILITY:"}),n.jsx("span",{className:"text-emerald-400",children:"98.4%"})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"DIMENSION:"}),n.jsx("span",{children:"Z-742"})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"ORBITS:"}),n.jsx("span",{children:"NORMAL"})]})]})]})}),n.jsx("div",{className:"absolute bottom-10 left-10 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]}),tt=()=>n.jsxs("group",{position:[0,-1,0],children:[n.jsx(Le,{preset:"city"}),n.jsx(je,{radius:100,depth:50,count:5e3,factor:4,saturation:0,fade:!0,speed:1}),n.jsx($,{count:500,scale:20,size:4,speed:.4,opacity:.5,color:"#ffffff"}),n.jsx("fog",{attach:"fog",args:["#050510",10,50]}),n.jsx(Re,{opacity:.3,seed:1,position:[0,-10,-20],speed:.2,color:"#111122"}),n.jsx(ke,{}),n.jsx(Ve,{}),n.jsx(qe,{}),n.jsxs("group",{position:[0,-8,0],rotation:[-Math.PI/2,0,0],children:[n.jsxs("mesh",{receiveShadow:!0,children:[n.jsx("planeGeometry",{args:[100,100]}),n.jsx("meshStandardMaterial",{color:"#050505",roughness:.4,metalness:.8})]}),n.jsx("gridHelper",{args:[50,50,2236962,328965],position:[0,.1,0],rotation:[Math.PI/2,0,0]})]}),n.jsx("spotLight",{position:[-10,10,10],angle:.3,penumbra:1,intensity:10,color:"#06b6d4"})]});export{tt as default};
