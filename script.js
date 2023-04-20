

//導覽列的抽屜
/*const navbar = document.querySelector('.navbar-left');
const toggleBtn = document.querySelector('.nav-logo-btn');

toggleBtn.addEventListener('click', () => {
navbar.classList.toggle('active');
});
*/

const navbar = document.querySelector('.navbar-left');
const toggleBtn1 = document.querySelector('.nav-logo-btn');
const toggleBtn2 = document.querySelector('.nav-logo-btn2');

toggleBtn1.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

toggleBtn2.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// 需要繪製的數據
var data = {
	labels: ['Active', 'Finish'],
	datasets: [{
		label: '# of Votes',
		data: [6, 19],
		backgroundColor: [
			'rgba(255, 193, 7, 1)',
			'rgba(0, 48, 99, 1)',
		
		],
		borderColor: [
			'rgba(255, 193, 7, 1)',
			'rgba(0, 48, 99, 1)',
		],
		borderWidth: 1
	}]
};
// 設置圖表選項
var options = {
	responsive: true,
	title: {
		display: true,
		text: 'Bootstrap Pie Chart with Chart.js'
	},
	legend: {
		position: 'bottom',
		labels: {
			fontColor: 'black',
			fontSize: 14
		}
	}
};
// 繪製圓餅圖
var ctx = document.getElementById('pie-chart1').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'pie',
	data: data,
	options: options
});


// 圓餅圖2
var data = {
	labels: ['Linkin', 'Cakeresum', 'Headhunter', 'Others' ],
	datasets: [{
		label: '# of Votes',
		data: [12, 19, 3, 5 ],
		backgroundColor: [
			'rgba(0, 48, 99, 1)',
			'rgba(12, 116, 70, 1)',
			'rgba(255, 193, 7, 1)',
			'rgba(108, 117, 125, 1)',
			
		],
		borderColor: [
			'rgba(0, 48, 99, 1)',
			'rgba(12, 112, 70, 1)',
			'rgba(255, 193, 7, 1)',
			'rgba(108, 117, 125, 1)',

		],
		borderWidth: 1
	}]
};
// 設置圖表選項
var options = {
	responsive: true,
	title: {
		display: true,
		text: 'Bootstrap Pie Chart with Chart.js'
	},
	legend: {
		position: 'bottom',
		labels: {
			fontColor: 'black',
			fontSize: 14
		}
	}
};
// 繪製圓餅圖
var ctx = document.getElementById('pie-chart2').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'pie',
	data: data,
	options: options
});




var data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ,'11' ,'12'],
    datasets: [
        {
            label: 'Apply',
            type: 'line',
            data: [65, 59, 80, 81, 56, 55, 40, 66, 56, 73, 84, 48],
            fill: false,
            borderColor: 'rgb(255, 193, 7)',
            tension: 0.3
        },
        {
            label: 'Apply(last years)',
            type: 'line',
            data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86],
            fill: false,
            borderColor: 'rgb(200, 200, 200)',
            borderDash: [8,6], // 設置線條樣式為虛線
            tension: 0.3
        },
        {
            label: 'view',
            type: 'bar',
            data: [451, 245, 702, 630, 665, 475, 730, 450, 588, 640, 619, 786, 827],
            backgroundColor: 'rgb(0, 48, 99)',			
            yAxisID: 'bar-y-axis' // 設置縱軸 ID，用於設置對應縱軸刻度
        }
    ]
};

var options = {
    responsive: true,
    title: {
        display: true,
        text: 'Mixed Chart with Chart.js'
    },
    scales: {
        y: {
            beginAtZero: true
        },
        'bar-y-axis': { // 定義一個新的縱軸
            position: 'right', // 放置在右側
            beginAtZero: true
        }
    }
};

var ctx = document.getElementById('mixed-chart').getContext('2d');
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

