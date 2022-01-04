// https://binarysearch.com/problems/Greatest-Common-Divisor
class GreatestCommonDivisor {
    static solve(nums: number[]) {
       let divison = 0;

       nums.forEach(num => divison = gcd(divison, num));

       return divison;
    }
}

function gcd(a, b) {
    return a == 0 ? b : gcd(b % a, a)
}

class GreatestCommonDivisor2 {
    solve(nums) {
        let division = nums[0];
        let findDiv = null;

        do {
            findDiv = nums.find(num => num % division !== 0);
            if (findDiv) {
                division = findDiv % division;
            }
        } while (findDiv)

        return division;
    }
}

// console.log(GreatestCommonDivisor.solve([6, 12, 9]));
// console.log(GreatestCommonDivisor.solve([1, 2]));
// console.log(GreatestCommonDivisor.solve([2, 2, 3]));
console.log(GreatestCommonDivisor.solve([2, 4,5, 6, 7]));
// console.log(GreatestCommonDivisor.solve([6, 7, 9]));
console.log(GreatestCommonDivisor.solve([597810672,715549680,672856416,1330400592,1163734992,1088928576,1377629424,874063440,1415507616,1498620096,1704950640,1259127072,459444528,1195594992,672530256,1775138976,1764713088,2075960880,1887436080,132132816,208509120,1828627056,1123637184,352480464,313219440,665926704,1884445776,1470687840,1266626592,1160846208,247997376,1005264,1709813664,1924877952,217797552,1643340960,1346033808,1213805952,1966425120,88536240,1298111616,1134679104,253826352,373841568,1674883872,259880400,129378384,649926288,1106155440,296758080,584825616,1317453552,163497312,1239700464,36897552,1124518464,953676720,1780871616,2112095952,1927475568,1547430048,788412096,1156124016,1884992688,1507119696,1913366016,1718921520,727758000,819193824,2046870864,856802880,1133280720,683384256,2115227952,168828192,466827840,1291007808,1683457344,103708512,176381280,750670848,757311552,677024352,624029616,1523070864,311096160,522417168,1622650752,846506160,1759346784,1585483632,1475062704,277426512,1135029888,1846507968,1522066464,165563568,380142720,187610256,714479184,287380656,259457472,396628272,1683552816,2083589136,1496288160,1680610896,1605142656,1810895184,945052272,840067632,1847456640,743510448,1230324336,2133041040,1506076416,1259595792,281080800,1545565968,1103566896,463514832,1388019888,784229472,861509088,620908416,1017698256,1332557136,662394672,82859760,1365526944,1968474528,1324073088,1444372992,1217271888,2083961088,1512641088,1745077392,777110112,1890345168,370190304,1002312144,1564617600,1749510144,1000728000,1143348480,1850028768,2055818016,1780616736,169771248,1440049968,46187280,573756048,1114627392,903059712,328342032,2121291504,686861424,1321366176,1040496192,1027089504,970166160,304123680,1564189056,1399638960,1581362784,994745232,1122628032,695036592,969859440,1933935264,128167056,2026869264,490026672,2054421360,324982800,1097558640,1583494272,1434385152,424557936,140635440,1949129136,1801900944,1502183232,1023481872,314427744,573389280,1227977712,1430869536,1646770608,1046283264,851436144,921114720,48816000,1506138624,1045824480,2133111456,765958464,1940167296,613568736,297390096,1057955472,1942602912,1935641232,1369394208,929265264,1172587536,1597543776,12034224,1456595568,2000092608,425962368,1622763936,1485325296,1624711392,1056273264,372525264,1186200720,1252038816,615427200,1617611040,1601328960,1452739968,1477686672,1156816512,120829104,1761909840,1804078224,2002135968,472335408,1583109360,648341712,492194016,102555936,1787087232,786179952,1359476784]));
