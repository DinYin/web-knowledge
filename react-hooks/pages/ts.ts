interface Lengthwise {
    length: number;
  }
  function Leng<T extends Lengthwise>(arg:T): T {
    console.log(arg)
    return arg
  }

Leng({length:2})
Leng({length:2,rr:2})
Leng({rr:2})
