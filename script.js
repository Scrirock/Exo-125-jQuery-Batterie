let son = $("audio");
$("body").on("keypress", function (ev){
    switch (ev.key){
        case "a":
            son[0].play()
            break;
        case "s":
            son[1].play()
            break;
        case "d":
            son[2].play()
            break;
        case "f":
            son[3].play()
            break;
        case "g":
            son[4].play()
            break;
        case "h":
            son[5].play()
            break;
        case "j":
            son[6].play()
            break;
        case "k":
            son[7].play()
            break;
        case "l":
            son[8].play()
            break;
    }
});