//Pig Latin
function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var firstLetter = str[0];
    if (vowels.includes(firstLetter)) {
        str = str.concat('way');
        return str;
    } else {
        let vowel = str.match(/[aeiou]/g);
        if (vowel != null) {
            let firstVowel = str.indexOf(vowel[0]);
            str = str.substring(firstVowel) + str.substring(0, firstVowel).concat('way');
            return str;
        } else {
            str = str.concat('ay')
            return str;
        }
    }
}
translatePigLatin("rohythm");