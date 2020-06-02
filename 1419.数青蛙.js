/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    let res = 0;

    let c = 0, r = 0, o = 0, a = 0, k = 0;


    for (let j = 0; j < croakOfFrogs.length; j++) {
        const i = croakOfFrogs[j];
        let index;

        switch (i) {
            case 'c':
                c++;
                if (k > 0) {
                    k--;
                } else {
                    res++;
                }
                break;
            case 'r':
                r++;
                if (c) {
                    c--;
                } else {
                    return -1;
                }
                break;
            case 'o':
                o++;
                if (r) {
                    r--;
                } else {
                    return -1;
                }
                break;
            case 'a':
                a++;
                if (o) {
                    o--;
                } else {
                    return -1;
                }
                break;
            case 'k':
                k++;
                if (a) {
                    a--;
                } else {
                    return -1;
                }
                break;
        }
    }

    return c + r + o + a ? -1 : res;
};

// var minNumberOfFrogs = function(croakOfFrogs) {
//     let c = 0,r=0,o=0,a=0, max_frogs = 0;
//     for(let i = 0;i<croakOfFrogs.length;i++){
//         const ch = croakOfFrogs[i]
//         switch(ch){
//             case "c":c++;
//                 if(c > max_frogs) max_frogs = c
//                 break;
//             case "r":r++;break;
//             case "o":o++;break;
//             case "a":a++;break;
//             case "k":
//                 c--
//                 r--
//                 o--
//                 a--
//                 break;
//             default: return -1;
//         }
//         if(!(c >= r && r >= o && o >= a && a >= 0)){
//             return -1
//         }
//     }
//     if(c == 0){
//         return max_frogs 
//     }
//     return -1
// };

// console.log(minNumberOfFrogs('crcoakroak'));
console.log(minNumberOfFrogs('craok'));
// console.log(minNumberOfFrogs('croakcroak'));