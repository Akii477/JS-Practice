/* QUES 3: Valid Anagram
    An Anagram is a word or phrase formed by rearranging the letters of a different
    word or phase, using all the original letters exactly once.

    // INPUT: s= " anagram" t="nagaram" ---> true;
    // INPUT: s= "rat " t =" car " ----> false;
*/

function isAnagram(s,t)
{
    s = s.split("").sort().join();
    t = t.split("").sort().join();

    return s === t;
}

console.log(isAnagram("anagram" , "nagaram"));
console.log(isAnagram("rat" , "car"));