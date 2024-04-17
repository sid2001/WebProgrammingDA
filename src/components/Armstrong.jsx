import { useEffect, useState } from "react";
import "/src/styles/armstrong.css";
function Armstrong() {
  const [res, setResult] = useState(-1); // Initializing with -1 as a default value
  const [number, setNumber] = useState(null);

  function checkArmstrong(val) {
    var sum = 0;
    var temp = val;
    var length = val.toString().length;
    while (temp > 0) {
      var rem = parseInt(temp % 10);
      sum += Math.pow(rem, length);
      temp = Math.floor(temp / 10);
    }
    if (sum === val) {
      return 1;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    if (number !== null) {
      var flag = checkArmstrong(number);
      setResult(flag);
    }
  }, [number]);

  useEffect(() => {
    const input = window.prompt("Enter a number");
    if (input !== null) {
      setNumber(parseInt(input));
    }
  }, []);

  const result = ["is not an Armstrong Number", "is an Armstrong Number"];
  return (
    <div id="result">
      <div>{res !== -1 ?number + "  " + result[res] : "Enter a Value"}</div>
    </div>
  );
}

export default Armstrong;
