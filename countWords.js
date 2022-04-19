// countWords and compare them frequency

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(paragraph, keyword) {
    const times = paragraph.match(new RegExp(`\\b${keyword}\\b`, 'gi'));

    if (times) {
        console.log(`${keyword} occurs ${times.length} times in thr paragraph`);


    } else {
        console.log(keyword + " does not occurs")
    }


};

const searchWords = ["love", "you"];
searchWords.forEach((keyword) => countWords(paragraph, keyword));