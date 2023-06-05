<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px}
  </style>
</head>
<body>
<p class="p1"><span class="Apple-converted-space"> </span>&lt;script&gt;</p>
<p class="p1"><span class="Apple-converted-space">  </span>function drawProgressBar(canvasId, progress, text) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const canvas = document.getElementById(canvasId);</p>
<p class="p1"><span class="Apple-converted-space">    </span>const ctx = canvas.getContext('2d');</p>
<p class="p1"><span class="Apple-converted-space">    </span>const centerX = canvas.width / 2;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const centerY = canvas.height / 2;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const radius = Math.min(canvas.width, canvas.height) * 0.45; // Adjusted radius calculation</p>
<p class="p1"><span class="Apple-converted-space">    </span>const startAngle = -0.5 * Math.PI;</p>
<p class="p1"><span class="Apple-converted-space">    </span>const endAngle = startAngle + (progress * 2 * Math.PI);</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.clearRect(0, 0, canvas.width, canvas.height);</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Draw background circle</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.beginPath();</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.fillStyle = '#333333';</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.fill();</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Draw progress arc</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.beginPath();</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.arc(centerX, centerY, radius, startAngle, endAngle);</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.lineWidth = Math.max(10, radius * 0.1); // Adjusted line width for sharper look</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.strokeStyle = '#ff69b4';</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.stroke();</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Calculate font size based on circle radius and increase by 50%</p>
<p class="p1"><span class="Apple-converted-space">    </span>const fontSize = radius * 0.25 * 1.5;</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>// Draw text</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.fillStyle = '#ffffff';</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.font = `bold ${fontSize}px Montserrat`; // Adjusted font size</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.textAlign = 'center';</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.textBaseline = 'middle';</p>
<p class="p1"><span class="Apple-converted-space">    </span>ctx.fillText(text, centerX, centerY);</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>function updateTimer() {</p>
<p class="p1"><span class="Apple-converted-space">      </span>const launchDate = new Date('June 12, 2023 23:59:00 GMT+0000').getTime();</p>
<p class="p1"><span class="Apple-converted-space">      </span>const now = new Date().getTime();</p>
<p class="p1"><span class="Apple-converted-space">      </span>const timeRemaining = launchDate - now;</p>
<p class="p2"><span class="Apple-converted-space">      </span></p>
<p class="p1"><span class="Apple-converted-space">      </span>const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));</p>
<p class="p1"><span class="Apple-converted-space">      </span>const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));</p>
<p class="p1"><span class="Apple-converted-space">      </span>const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));</p>
<p class="p1"><span class="Apple-converted-space">      </span>const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);</p>
<p class="p2"><span class="Apple-converted-space">      </span></p>
<p class="p1"><span class="Apple-converted-space">      </span>const progressBarValues = {</p>
<p class="p1"><span class="Apple-converted-space">        </span>days: days / 365,</p>
<p class="p1"><span class="Apple-converted-space">        </span>hours: hours / 24,</p>
<p class="p1"><span class="Apple-converted-space">        </span>minutes: minutes / 60,</p>
<p class="p1"><span class="Apple-converted-space">        </span>seconds: seconds / 60</p>
<p class="p1"><span class="Apple-converted-space">      </span>};</p>
<p class="p2"><span class="Apple-converted-space">      </span></p>
<p class="p1"><span class="Apple-converted-space">      </span>drawProgressBar('days', progressBarValues.days, days<span class="Apple-converted-space">        </span>+ 'd');</p>
<p class="p1"><span class="Apple-converted-space">      </span>drawProgressBar('hours', progressBarValues.hours, hours + 'h');</p>
<p class="p1"><span class="Apple-converted-space">      </span>drawProgressBar('minutes', progressBarValues.minutes, minutes + 'm');</p>
<p class="p1"><span class="Apple-converted-space">      </span>drawProgressBar('seconds', progressBarValues.seconds, seconds + 's');</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><span class="Apple-converted-space">    </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>setInterval(updateTimer, 1000);</p>
<p class="p1"><span class="Apple-converted-space">  </span>&lt;/script&gt;</p>
</body>
</html>
