
console.log('Loops Level 3_1');

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `


let texty = Number(text.length);
console.log(texty);
let arr = [];
let trenn100 = () => {
    console.log('trenn100');
    let start = 0;
    let end = 100;
    for (let i = -25; i <= 1; i++) { // Warum läuft es, wenn i= -25?? --aber pusht texty in der richtigen Reihenfolge??
        let pushy = text.slice(start, end);
        start += 100;
        end += 100;
        arr.push(Number(i + 26) + " of gesamte-Nachrichten: " + pushy);
        console.log(Number(i + 26) + " of gesamte-Nachrichten: " + pushy);// i+26 wird als String geloggt ?
    }
}
// Warum ist das undefined?? --UND bringt aber gleichzeitig den Text ??
console.log(trenn100(arr));// undefined??// 


console.log('Loops Level 3_2');

let ergebnis = document.getElementById('ergebnis');
let numArr = [5, 22, 15, 100, 55];
let teileUndHerrsche = () => {
    console.log('teilt und herrscht');
    let index = -1;
    for (let i = 1; i <= 5; i++) {
        numArr[index += 1];
        let x = 1;
        for (let k = 1; k <= 100; k++) {
            x++;
            numArr[index] % x;
            if (numArr[index] % x == 0 && numArr[index] != x) {
                let y = numArr[index] / x;
                document.write(`<h4> ${numArr[index]} lässt sich durch ${x} teilen! das Ergebnis ist ${y} </h4>`);
            }
        }
    }
}
teileUndHerrsche();

console.log('Loops Level 3_3');
let input = document.getElementById('inputLoop');
let output = document.getElementById('output');
let arrArr = [];
let loop = () => {
    console.log("loop loops");
    let inputty = Number(input.value);
    if (inputty == 0) {
        output.innerHTML = "ERROR";
    } else if (inputty % 2 == 0) {
        for (let o = 1; o <= inputty; o++) {
            arrArr.push("o");
        }
        output.innerHTML = ` L${arrArr.join("")}p`;
        arrArr = [];
    } else if (inputty % 2 != 0) {
        console.log(input.value);
        for (let i = 1; i <= input.value / 2; i++) {
            arrArr.push("o0");
        }
        output.innerHTML = ` L${arrArr.join("")}op`;
        arrArr = [];
    }
}
console.log('Loops Level 3_4');

let maxNumber = document.getElementById('maxNum');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let result = document.getElementById('result');;

let countOnMe = () => {
    console.log("countOnMe");
    let maxNum = maxNumber.value;
    let num1 = number1.value;
    let num2 = number2.value;
    let emptyArr = [];

    if (Number(maxNum.length) == 0 || num1 === num2) {
        result.innerHTML = "ERROR";
    } else {
        for (let i = 1; i < maxNum; i++) {
            if (i % num1 == 0 || i % num2 == 0) {
                i = Number(i);
                emptyArr.push(i);
            }
        }
        console.log(emptyArr);
        let length = Number(emptyArr.length);
        let added = 0;
        for (let k = 0; k < length; k++) {
            added += emptyArr[k];
        } console.log(added);
        result.innerHTML = `${added}`;
    }
}
