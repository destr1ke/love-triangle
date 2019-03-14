module.exports = function getLoveTrianglesCount(preferences = []) {
  	let sum=0;
    let a,b,c;
    let mass=[];
    for (i=0;i<preferences.length;i++){ 
       a = preferences[i];
       b = preferences[a-1]; 
       c = preferences[b-1];
       d = preferences[c-1];
      if (a==d & a!=b & a!=c & b!=c){
        if (mass.includes(a)==false){
        mass.push(a,b,c);
        sum++;
        }
   	  };
    }
    return sum;
};
