function createBubble(serviceNameData) {
    const section = document.getElementById("header_top");
    const createElement = document.createElement("span");
    createElement.className = 'bubble';
    var size = Math.random() * 1;
    var bubble_size = Math.random() * 100;
    createElement.append(serviceNameData);
    createElement.style.animation =
        "animation 15s linear infinite";
    createElement.style.width = 100 + size + "px";
    createElement.style.height = 100 + size + "px";

    // createElement.style.width = bubble_size + "px";
    // createElement.style.height = bubble_size + "px";

    createElement.style.left = Math.random() * 100 + "%";
    section.appendChild(createElement);

    console.log(Math.random() * 100 + "%");

    setTimeout(() => {
        createElement.remove();
    }, 12000);
}

// setInterval(createBubble, 700);
let serviceNameData = [
    'Digital Marketing', 'Web Development', 'Graphic Design', 'Data Entry',
    'SEO'
];

// let serviceNameData = [''];

// setInterval(function(){
//     for (let i = 0; i < serviceNameData.length; i++) {
//         return createBubble(serviceNameData[i]);
//     }
//     setTimeout(() => {
//             // return createBubble(serviceNameData[i]);
//     }, 1000);
// }, 5000);


//     for (let i = 0; i < serviceNameData.length; i++) {
//     setInterval(() => {
//         return createBubble(serviceNameData[i]);
//     }, 1000);
//     // setTimeout(() => {
//     //     return createBubble(serviceNameData[i]);
//     // }, 1000);
// }

let industry_nameArr = ['1', '2','3'];

for (let i = 0; i < industry_nameArr.length; i++) {
setInterval(() => {
    // return industry_nameSin = industry_nameArr[i];
    industry_name(industry_nameArr[i]);
}, 2000);
}

// setInterval(() => {
//     industry_name(industry_nameArr[i]);
// }, 2000);

function industry_name(name){
    $('#industry_name').html(name);
}