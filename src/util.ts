export const decode = (text:string):string => text.replace(/[a-zA-Z]/g, (t:string) => {
   const c1 = t <= "Z" ? 90 : 122;
   const c2 = t.charCodeAt(0) + 13;
   return String.fromCharCode(c1 >= c2 ? c2 : c2 - 26);
});