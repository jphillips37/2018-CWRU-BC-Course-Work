var query;
var beginDate;
var endDate;
var quantity;
var articleNumber = 1;

function ajaxCall(query, beginDate, endDate) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "8952bd6ffbfe461592bb8b3eab1ad43e",
        'q': query,
        'begin_date': beginDate,
        'end_date': endDate
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        console.log(result.response.docs[0].byline.original);
        $("#article-response").prepend("<div id='article-"+articleNumber+"'></div>");
        $("#article-"+articleNumber).append("<h3 class='article-title'>"+result.response.docs[0].headline.main+"</h3>");
        $("#article-"+articleNumber).append("<p>"+result.response.docs[0].byline.original+"</p>");
    }).fail(function (err) {
        throw err;
    });
}

function updatePage(){

}
// ajaxCall("obama", "19000101", "20140101");
$(":button").on("click", function() {
    
    event.preventDefault();

    if ($(this).attr("id") == "submitBtn"){
        
        query = $("#searchForm").val();
        beginDate = $("#startForm").val();
        endDate = $("#endForm").val();
        // console.log(query, beginDate, endDate);
        ajaxCall(query, beginDate, endDate);
        // console.log()

    }
})

