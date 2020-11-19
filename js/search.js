var data=[];
function search(event){
    event.preventDefault();
    $(".job-search").remove();
    $("#text").remove();
    jobTitle=$("#inputJob").val();
    company=$("#company").val();
    city=$("#inputPlace").val();
    var today=new Date('11/4/2015');
    postDate=$("#datePost").val();
    today.setDate(today.getDate()-postDate);
    publishDate=today;
    employeeType=$("#employeeType").val();
    skill=$("#skill").val();
    data=getDataSearch();
    setTimeout(function(){
        if(data.length==0){
            var text=`<div id="text"><h4>Không có kết quả tìm kiếm phù hợp!</h4></div>`
            $("#outputSearch").append(text);
        }
        else{
            var k=0,n=0;
            if(data.length>=3){
                n=3;
            }
            else{
                n=data.length;
            }
            showOutputSearch(k,n);
        }
    },1000);
}
function showOutputSearch(k,n){
    for(let i=k;i<k+n;i++){
        var jobSearch=document.createElement("div");
        jobSearch.setAttribute("class","job-search");
        var text= `<h5>`+data[i].TITLE+`</h5>
        <p class="lead" style="font-size: 20px;">`+data[i].DESCRIPTION
        +`<br>Tuyển nhân viên: `+data[i].EMPLOYMENT_TYPE
        +`<br>Vị trí tuyển dụng: `+data[i].SENIORIRY_LEVEL+`</p>
        <hr class="my-4">
        <p>Thời gian đăng:`+ data[i].PUBLISHED_DATE+`</p>
        <a class="btn btn-primary btn-sm" href="`+data.RECRUITMENT_URL+`" role="button">Chi tiết</a>`
        jobSearch.innerHTML=text;
        $("#outputSearch").append(jobSearch);
    }
}