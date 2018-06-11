var http = require('https');
var cheerio = require('cheerio');
var url = 'https://www.imooc.com/learn/348';


function filterChaters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    // console.log(chapters);

    // [
    //     {
    //         chapterTitle:"",
    //         videos:[
    //             title;'',
    //             id:''
    //         ]
    //     }
    // ]

    var courseData = [];
    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children("li");
        // console.log(videos);
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };

        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            });

            courseData.push(chapterData)
        })

    });

    console.log("chapterData"+courseData);
    return courseData
}
function printCourseInfo(courseData){
    courseData.forEach(function (item) {
        var chaterTitle = item.chapterTitle;
        console.log(chaterTitle+'\n');

        item.videos.forEach(function (video) {
            console.log('【'+video.id+'】 '+ video.title+'\n' )
        })
    })
}
http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data
    });
    res.on('end', function () {
        console.log('ecd');
        // console.log(html)
        var courseData = filterChaters(html);
        // console.log()
        printCourseInfo(courseData)
    })
}).on('error', function () {
    console.log('获取课程数据出错')
});