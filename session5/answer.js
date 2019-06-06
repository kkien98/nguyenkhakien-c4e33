let answer = (real, fake, ans,correct,incorrect) => {

    if (real === fake) {
        if (ans === "y") {
            console.log(correct);
        }
        else if (ans === "n") {
            console.log(incorrect)
        }
    }
    else
    {
        if (ans === "n") {
            console.log(correct);
        }
        else if (ans === "y") {
            console.log(incorrect);
        } 
    }
    }
