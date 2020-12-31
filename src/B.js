
import React , {useEffect, useState }from 'react'
import axios from 'axios';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Link, withRouter } from "react-router-dom";
import FadeIn from 'react-fade-in';
function B({history,path}){

			const [datagit, SetData]  = useState([]);

		useEffect(()=>{

				async function fetchData(){
					const request = await axios.get("https://api.github.com/repositories/19438/issues");
					SetData(request.data);
					
					
				}

				fetchData();

				

		}, []);
console.log(datagit);

const arr = [datagit.map(obj=>{  return { name:obj.created_at,y:obj.comments}  })];
console.log(arr);
const options ={

	 chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Comments w.r.t date'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Comments',
    colorByPoint: true,
    data:arr[0],
  }]
}

	return (

		<div >
		<FadeIn  delay={400} transitionDuration={1000}>
<h1>Data for MICKY</h1>
 <button
              onClick={() => {
                
                  history.push("/");
               
              }}
              
            >
              Signout
            </button>
<HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  </FadeIn>
		</div>

		)
}

export default B;