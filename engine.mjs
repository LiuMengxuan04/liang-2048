export function slide(board,dir){
 let next=Array(16).fill(0), gain=0,merged=[],travels=[];
 for(let l=0;l<4;l++){
  let ids=Array.from({length:4},(_,i)=> dir==='left'?l*4+i:dir==='right'?l*4+3-i:dir==='up'?i*4+l:(3-i)*4+l);
  let a=ids.filter(i=>board[i]).map(i=>({v:board[i],i})),out=[];
  for(let j=0;j<a.length;j++){let target=ids[out.length];travels.push({from:a[j].i,to:target});if(a[j].v===a[j+1]?.v){let v=a[j].v*2;out.push(v);gain+=v;merged.push(target);travels.push({from:a[j+1].i,to:target});j++;}else out.push(a[j].v);}
  ids.forEach((id,i)=>next[id]=out[i]||0);
 }
 return {board:next,gain,merged,travels,changed:next.some((v,i)=>v!==board[i])};
}
export function canMove(b){return b.includes(0)||['left','up'].some(d=>slide(b,d).changed)}
export function spawn(b,rng=Math.random){let ids=b.map((v,i)=>v?null:i).filter(v=>v!==null);if(!ids.length)return -1;let id=ids[Math.floor(rng()*ids.length)];b[id]=rng()<.9?2:4;return id;}
