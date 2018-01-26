function renderQuestion(array) {
    html = '\
  <li>\
    <label class="item-radio item-content">\
      <input type="radio" name="ansOptionBox" value="' + array.index + '"/>\
      <i class="icon icon-radio"></i>\
      <div class="item-inner answer">\
        ' + array.answer + '\
      </div>\
      <div class="result" style="display:none">' + array.result + '</div>\
    </label>\
  </li>\
  '
    return html
}

function genStatistics(page){
  var chartArr = [];
   chartArr["result"] = [];
   chartArr["result"]['content'] = [];

//  google.charts.load('current', {'packages':['corechart']});

  ajaxGetStatisticsDetail({
      "id": page.detail.route.query.id
  }, function(response) {
//debugger;
      $(response.result).each(function(index, result) {
        chartArr["result"]["content"].push(
          {
    				"label": result.answer,
    				"value":  result.choiceCount
    			}
        )
      })
      //debugger;
      if(chartArr["result"]["content"][0].label == null){
        chartArr["result"]["content"].push(
          {
            "label": "No Result",
            "value":  1
          }
        )
      }
      chartArr["title"] = response.result[0].title
      chartArr["question"] = response.result[0].question
      drawChart(chartArr);
  })

}

function drawChart(chartArr){
  ///$(".chartQuestion").html(chartArr["question"]);
//  .find("img").attr("width","100%")
//  $(".chartQuestion").find("img").css('display', 'none');
  $("#piechart").html("");
  var pie = new d3pie("piechart", {
  	"header": {
  		"title": {
  			"text": "",
  		},
  		"subtitle": {
  			"text": "",
  		},
  		"titleSubtitlePadding": 9
  	},
  	"footer": {
  		"color": "#999999",
  		"fontSize": 10,
  		"font": "open sans",
  		"location": "bottom-left"
  	},
  	"size": {
  		"canvasWidth": $(".popup").width() ,
      "canvasHeight":'300' ,
  		"pieOuterRadius": "50%"
  	},
  	"data": {
  		"sortOrder": "value-desc",
  		"content": chartArr["result"]["content"]
  	},
    "labels": {
  		"outer": {
  			"format": "label-value2",
  			"pieDistance": 1
  		},
  		"inner": {
  			"hideWhenLessThanPercentage": 3
  		},
  		"mainLabel": {
  			"fontSize": 11
  		},
  		"percentage": {
  			"color": "#ffffff",
  			"decimalPlaces": 0
  		},
  		"value": {
  			"color": "#adadad",
  			"fontSize": 11
  		},
  		"lines": {
  			"enabled": true
  		},
  		"truncation": {
  			"enabled": true
  		}
  	},
  	"effects": {
  		"pullOutSegmentOnClick": {
  			"effect": "linear",
  			"speed": 400,
  			"size": 8
  		}
  	},
  	"misc": {
  		"gradient": {
  			"enabled": true,
  			"percentage": 100
  		}
  	}
  });
}
function drawChartbk(chartArr) {

    var result2 = chartArr.result

    var data = google.visualization.arrayToDataTable(chartArr.result);

    var options = {

        legend: {
            //position: "bottom"
        },
        chartArea: {

        },
        pieStartAngle: 200
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function addFacebookFrame(page){
  $(".fbcomment").attr("width",$(window).width() )
  $(".fbcomment").attr("src",
  'http://gogogo.synology.me/facebook/?'+
  'id=' + page.detail.route.query.id +
  'width='+  (parseInt($(window).width())-100))
}
