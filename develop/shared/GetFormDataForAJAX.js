export default function (e) {
    e.preventDefault();
    let inputs = [...e.target.elements].slice(0, -1);                  //Cut the button input (We don't wanna send it)
    inputs.forEach((element, index) => inputs[index] = element.value); //Make pretty-face array of data.
    return inputs;
}