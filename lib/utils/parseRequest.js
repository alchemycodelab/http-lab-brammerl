module.exports = rawRequest => {
  const arr = rawRequest.split(' ');
  const [method, path, , , body] = arr;

  console.log(body);

  if(body.includes('\n')) {
    const arr = body.split('\n');
    console.log(arr);

    return {
      method: method,
      path: path, 
      body: arr[2]
    };

  } else {
    return {
      method: method,
      path: path
    };
  }

};
