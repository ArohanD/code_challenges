function songDecoder(song){
    var songArray = song.split('');
    let resultArray = [];
    for (let i = 0; i < songArray.length; i++){
        if(songArray[i] === 'W' && songArray[i+1] === 'U' && songArray[i + 2] === 'B'){
            delete songArray[i];
            delete songArray[i+1]
            delete songArray[i + 2]
        } else if (songArray[i] !== undefined){
            resultArray.push(songArray[i]);
        }
    }
    var retString = "";
    for(let i = 0; i < songArray.length; i++){
        if(songArray[i] !== undefined){
            retString += songArray[i];
            if(songArray[i + 1] === undefined){
                retString += " ";
            }
        }
    }
    return retString[retString.length - 1] === " " ? retString.slice(0, retString.length - 1) : retString;
}

console.log(songDecoder("AWUBBWUBC") === "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC") === "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB") === "A B C");
console.log(songDecoder("WUBWEWUBWUBAREWUBTHEWUBCHAMPIONS"));