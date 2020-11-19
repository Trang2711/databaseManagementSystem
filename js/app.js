var firebaseConfig = {
  apiKey: "AIzaSyBwpqCGd8GhZVnHv5jakRPNmtAyIbGD1LQ",
  authDomain: "itviec.firebaseapp.com",
  databaseURL: "https://itviec.firebaseio.com/",
  projectId: "itviec",
  storageBucket: "itviec.appspot.com",
  messagingSenderId: "314254035724",
  appId: "1:314254035724:web:f50e2ea6cd932bc6295729",
  measurementId: "G-0M6HBJDJQW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var jobTitle;
var company;
var city;
var publishDate;
var employeeType;
var skill;
var postDate;
const app=firebase.database().ref();
function getDataSearch(){
  $("#inputJob").val(jobTitle);
  $("#company").val(company);
  $("#inputPlace").val(city);
  $("#datePost").val(postDate);
  $("#employeeType").val(employeeType);
  $("#skill").val(skill);
var dataSearch=[];
  app.child('JOB')
      .orderByChild('TITLE')
      .equalTo(jobTitle)
      .on('value', searchJob);
  function searchJob(snap){
    var dataJob=Object.values(snap.val());
    var keyDataJob=Object.keys(snap.val());
    if(dataJob.length!=null){
      for(let i=0;i<dataJob.length; i++){
        const id = parseInt(keyDataJob[i]);
        if(dataJob[i].CITY==city
          && (new Date(dataJob[i].PUBLISHED_DATE))>=publishDate
          && dataJob[i].EMPLOYMENT_TYPE==employeeType){
            app.child('COMPANY')
              .orderByKey()
              .equalTo((dataJob[i].COMPANY_ID).toString())
              .on('value',function(snap){
                if(snap.val()!=null && Object.keys(snap.val()).map(key=>snap.val()[key])[0].NAME==company){
                  app.child('JOB_SKILL')
                    .orderByChild('JOB_ID')
                    .equalTo(id)
                    .on('value',function(snap){
                      var skillId=Object.keys(snap.val()).map(key=>snap.val()[key])[0].SKILL_ID;
                      app.child('SKILL')
                      .orderByKey()
                      .equalTo(skillId.toString())
                      .on('value',function(snap){
                        if(Object.keys(snap.val()).map(key=>snap.val()[key])[0].SKILL==skill){
                          dataSearch.push(dataJob[i]);
                        }
                      })
                    })
                }
              });
          }
      }
    }
  }
  return dataSearch;
}
