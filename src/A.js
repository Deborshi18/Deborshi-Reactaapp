import React , {useEffect, useState }from 'react'
import axios from 'axios';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Link, withRouter } from "react-router-dom";
import './A.css'
import FadeIn from 'react-fade-in';
function A({history, path}){




		
		const [datagit, SetData]  = useState([]);

		useEffect(()=>{

				async function fetchData(){
					const request = await axios.get("https://api.github.com/repositories/19438/issues");
					SetData(request.data);
					console.log(datagit);
					
				}

				fetchData();

				

		}, []);
const arr = [datagit.map(obj=>{  return [ obj.created_at,obj.comments]  })]
console.log(arr[0]);


const options = {

  chart: {
    type: 'column'
  },
   colorAxis: [{
   colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
        '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
   }],
  title: {
    text: 'Number of comments w.r.t  date.'
  },
  subtitle: {
    text: 'Source: Github'
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Comments'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'No. of comments: <b>{point.y} </b>'
  },
 
  series: [{
    name: 'Comments',
    data: arr[0],
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
}

	return (

		<div >
<FadeIn  delay={400} transitionDuration={1000}>
<h1>Data for John</h1>
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
  /></FadeIn>
		</div>

		)
}

export default A;