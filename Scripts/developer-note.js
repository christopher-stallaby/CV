const spanList = [...document.getElementsByTagName("span")];

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  return getRandomNumber(16777215).toString(16);
};

const getRandomSkewArr = () => {
  const skewDirection = getRandomNumber(2) === 0 ? -1 : 1;
  const skewCoef = 8;
  return [1, 2].map(() => getRandomNumber(skewCoef) * skewDirection);
};

const fontSizeArr = [
  45, 48, 49, 48, 49, 40, 46, 44, 41, 40, 45, 48, 47, 43, 42, 44, 43, 48, 40,
  47, 40, 44, 40, 48, 45, 44, 41, 47, 42, 43, 44, 40, 41, 41, 44, 47, 45, 40,
  44, 48, 46, 48, 44, 47, 42, 46, 44, 49, 41, 41, 46, 40, 40, 47, 45, 46, 48,
  46, 45, 40, 49, 48, 43, 40, 43, 45, 47, 48, 49, 48, 43, 45, 47, 49, 47, 41,
  41, 41, 43, 43, 43, 43, 47, 49, 40, 46, 49, 48, 48, 48, 47, 45, 49, 41, 42,
  48, 42, 48, 45, 44,
];

const fontsArr = ["Piazzolla", "Ceviche One", "Raleway Dots"];

const textDecorationArr = ["underline", "line-through", "overline", "none"];
const textTransformArr = ["uppercase", "lowercase"];

const letterColors = [
  "f40c3e",
  "582446",
  "ead305",
  "89ad47",
  "983f37",
  "963b52",
  "645892",
  "77c502",
  "c52ab0",
  "671d97",
  "315410",
  "166d5c",
  "8460ec",
  "3b405f",
  "bbd78f",
  "cfa1a7",
  "4ef2ca",
  "828bbf",
  "708ba5",
  "7b6b9a",
  "f573e7",
  "4c986b",
  "825775",
  "2d8f",
  "bcabe4",
  "50b73d",
  "6315c4",
  "4834cc",
  "e932d8",
  "793e47",
  "b99491",
  "24e187",
  "6453d7",
  "19506a",
  "ff0de8",
  "fc8d13",
  "d30c22",
  "c6d107",
  "c33fdc",
  "c21bd8",
  "d7dcec",
  "3668b6",
  "704452",
  "cc3ae6",
  "141561",
  "2f8339",
  "9a44e4",
  "222a73",
  "6c3645",
  "ceffc6",
  "5d964d",
  "34f215",
  "e33e24",
  "6ce7e1",
  "5cbe9",
  "18016c",
  "b53b18",
  "ecc181",
  "966f31",
  "11e854",
  "5dd993",
  "b65f67",
  "44b135",
  "e4ed4b",
  "f0dd09",
  "da7dc2",
  "2b389d",
  "c28275",
  "6565e0",
  "d1fb3",
  "baac6",
  "f5b00a",
  "b7abe9",
  "bab48d",
  "c4c754",
  "2d9a2e",
  "350113",
  "88c3d0",
  "c78a0c",
  "ef055a",
  "a288aa",
  "14bee4",
  "c2d33c",
  "22a4d9",
  "f2fc7f",
  "6941a9",
  "e18478",
  "107a69",
  "e6cf62",
  "96f27f",
  "75fa97",
  "6b684a",
  "54b9a6",
  "4d74c0",
  "eb2c1a",
  "2d68cc",
  "9e8dae",
  "dac4d",
  "8edc17",
  "41b465",
];

document.addEventListener("DOMContentLoaded", () => {
  const spanList = Array.from(document.getElementsByTagName("span"));
  Array.from(spanList).forEach((element, index) => {
    const turnDirection = getRandomNumber(2) === 0 ? -1 : 1;
    const degValue = Math.floor(Math.random() * 12) * turnDirection;
    const skewArr = getRandomSkewArr();
    const positionOffset = 20;
    const isBold = getRandomNumber(8) % 2 === 0 ? "bold" : "normal";
    const decoration =
      textDecorationArr[getRandomNumber(textDecorationArr.length)];
    const transform =
      textTransformArr[getRandomNumber(textTransformArr.length)];
    const borderToPosition = getRandomNumber(2) === 0 ? "top" : "bottom";
    const positionOffsetValue = getRandomNumber(positionOffset);
    const fontFamily = fontsArr[getRandomNumber(fontsArr.length)];

    element.style.transform = `rotate(${degValue}deg) skew(${skewArr[0]}deg, ${skewArr[1]}deg)`;
    // element.style.borderColor = `#${
    //   letterColors[letterColors.length - 1 - index]
    // }`;
    // element.style[borderToPosition] = `${positionOffsetValue}px`;

    // if (index > 2) {
    //   element.style.color = `#${letterColors[index]}`;
    //   element.style.fontSize = `${fontSizeArr[index]}px`;
    //   element.style.fontWeight = isBold;
    //   element.style.textDecoration = decoration;
    //   element.style.textTransform = transform;
    //   element.style.fontFamily = `'${fontFamily}', sans-serif`;
    // }

    element.style.backgroundColor = `#${getRandomColor()}`;

    element.addEventListener("mouseover", (e) => {
      e.target.style.transform = `rotate(${degValue}deg) skew(${skewArr[0]}deg, ${skewArr[1]}deg) scale(1.2)`;
    });

    element.addEventListener("mouseleave", (e) => {
      e.target.style.transform = `rotate(${degValue}deg) skew(${skewArr[0]}deg, ${skewArr[1]}deg) scale(1)`;
    });
  });
});