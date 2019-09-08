const a = { x: {x1: 1}, y: 2, z: [1, 2, {z1: 1}], u: undefined, v: null};

function deepCopy(obj){
  let newObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

  Object.entries(obj).forEach(([key, value]) => {

    if (value instanceof Object){
	    newObj[key] = deepCopy(value);
	  } 
  })
  return newObj;
}

const b = deepCopy(a);

b.z.push(4);
b.x.x2 = 2;
b.z[2].z2 = 2;

console.log(a);
console.log(b);