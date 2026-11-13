import assert from 'node:assert/strict';import{slide,spawn,canMove}from'./engine.mjs';
const b=a=>[...a,...Array(16-a.length).fill(0)];
assert.deepEqual(slide(b([2,2,2,2]),'left').board.slice(0,4),[4,4,0,0]);
assert.equal(slide(b([2,2,2,2]),'left').gain,8);
assert.deepEqual(slide(b([4,4,8,0]),'left').board.slice(0,4),[8,8,0,0]);
assert.deepEqual(slide(b([2,2,4,0]),'right').board.slice(0,4),[0,0,4,4]);
assert.equal(slide(b([2,0,0,0]),'left').changed,false);
assert.deepEqual(slide([2,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0],'up').board,[4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0]);
assert.equal(canMove([2,4,2,4,4,2,4,2,2,4,2,4,4,2,4,2]),false);
assert.equal(canMove([2,2,...Array(14).fill(4)]),true);
for(let n=0;n<1000;n++){let a=Array.from({length:16},()=>Math.random()<.3?0:2**(1+Math.floor(Math.random()*6)));for(const d of['left','right','up','down']){let r=slide(a,d);assert.equal(r.board.reduce((x,y)=>x+y,0),a.reduce((x,y)=>x+y,0));assert.equal(r.board.length,16);}}
let a=Array(16).fill(0);spawn(a,()=>0);assert.equal(a[0],2);console.log('2048 engine: merge, direction, no-op, loss and 4000 randomized conservation tests passed');
