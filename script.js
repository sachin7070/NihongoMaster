const kanjiList = [
{
kanji:"日",
meaning:"Sun / Day"
},
{
kanji:"月",
meaning:"Moon / Month"
},
{
kanji:"火",
meaning:"Fire"
},
{
kanji:"水",
meaning:"Water"
},
{
kanji:"木",
meaning:"Tree"
}
];

let random =
kanjiList[
Math.floor(
Math.random()*kanjiList.length
)
];

document.getElementById("kanjiBox").innerHTML = `
<h1>${random.kanji}</h1>
<p>${random.meaning}</p>
`;
