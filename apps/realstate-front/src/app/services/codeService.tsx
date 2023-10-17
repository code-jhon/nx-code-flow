//const API_URL = 'https://www.random.org/integers/?num=1&min=0000&max=9999&base=10&format=plain&rnd=new&col=1';

function checkCode(code: string) {
  /* const response = await fetch(`${API_URL}`);
  const data = await response.json();

  return code === data; //Right code */

  return code === "1234"; //Sample code
}

export { checkCode }