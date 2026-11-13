import assert from 'node:assert/strict';
let contexts=0,notes=0,events={};const els=new Map();
function el(id){if(!els.has(id))els.set(id,{setAttribute(k,v){this[k]=v},innerHTML:'',classList:{toggle(){},remove(){},add(){}},addEventListener(k,f){events[id+':'+k]=f}});return els.get(id)}
globalThis.matchMedia=()=>({matches:true});globalThis.localStorage={getItem:()=>null,setItem(){}};globalThis.document={getElementById:el};
const param=()=>({value:0,setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){}});
globalThis.window={AudioContext:class{constructor(){contexts++;this.state='running';this.currentTime=0;this.destination={}}createGain(){return{gain:param(),connect(){},disconnect(){}}}createOscillator(){notes++;return{frequency:param(),connect(){},disconnect(){},start(){},stop(){}}}resume(){return Promise.resolve()}}};
const fx=await import('./effects.mjs');assert.equal(contexts,0,'must not autoplay/create audio before gesture');fx.unlockSound();assert.equal(contexts,1);fx.play('merge',32,2);assert.equal(notes,4);events['sound:click']();fx.play('merge');assert.equal(notes,4,'muting prevents new notes');await fx.travel([]);console.log('Effects: deferred AudioContext, merge chord, mute, reduced-motion path passed');
