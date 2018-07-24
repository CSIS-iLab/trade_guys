import * as d3 from 'd3'
import breakpoints from './breakpoints'

const chart = drawChart()
const transitionDuration = 600
const t = d3.transition().duration(transitionDuration)
const format = d3.format(',.3s')
const formatPercentage = d3.format(',.2%')

let windowWidth = window.innerWidth
let el

function resize() {
  const sz = Math.min(el.node().offsetWidth, window.innerHeight)
  chart.width(sz).height()
  el.call(chart)
}

function drawChart() {
  const colors = ['#455a64', '#8cb561', '#e7ae3f', '#a483a8', '#3b75bb']
  const margin = { top: 0, right: 20, bottom: 70, left: 70 }
  let width = 0
  let height = 0
  let groups

  var x = d3
    .scaleBand()
    .paddingInner(0.05)
    .align(0.1)

  var y = d3.scaleLinear()

  function enter({ container, data }) {
    const svg = container.selectAll('svg').data([data])
    const svgEnter = svg.enter().append('svg')
    svgEnter.append('rect').attr('class', 'rect')
    const gEnter = svgEnter.append('g')
    gEnter.append('g').attr('class', 'axis axis--categories')
    gEnter.append('g').attr('class', 'g-plot')
  }

  function exit({ container, data }) {}

  function updateScales({ data }) {
    groups = data.map(d => d.group)

    x.domain(groups).rangeRound([0, width])

    y.domain([0, 263])
      .nice()
      .rangeRound([height, 0])
  }

  function updateDom({ container, data }) {
    let svg = container
      .select('svg')
      .attr(
        'viewBox',
        '0 0 ' +
          (width + margin.left + margin.right) +
          ' ' +
          (height + margin.top + margin.bottom)
      )

    let g = svg
      .select('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    let plot = g.select('.g-plot')

    let stack = d3.stack().keys(data.map(d => d.category))(data)
    console.log(stack)

    plot
      .append('g')
      .selectAll('.column')
      .data(stack)
      .enter()
      .append('g')
      // .attr("fill", function(d) { return z(d.key); })
      .selectAll('rect')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('x', d => {
        // console.log(d)
        return x(d.data.group)
      })
      .attr('y', d => y(d[1]))
      .attr('height', d => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth())
  }

  function updateAxes({ container, data }) {}

  function chart(container) {
    const data = container.datum()

    enter({ container, data })
    exit({ container, data })
    updateScales({ container, data })
    updateDom({ container, data })
    updateAxes({ container, data })
  }

  chart.width = function(...args) {
    if (!args.length) return width
    width = args[0]
    return chart
  }

  chart.height = function() {
    height = 700
    if (breakpoints.isMobile()) {
      height = 400
    }
    return chart
  }

  const interactions = {}

  return chart
}

function init(args) {
  el = d3.select(args.container)
  el.datum(args.data)
  resize(args)
}

export default { init }
