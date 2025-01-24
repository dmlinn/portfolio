"use client";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DonutChartProps {
  years: number;
  labelText: string;
  chartThickness?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  years,
  labelText,
  chartThickness = 5,
}) => {
  if (!years || years < 0 || years > 100) {
    throw new Error('Invalid completion percentage');
  }

  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = 50;
    const height = 50;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height + 40)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<{ value: number }>()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc<d3.PieArcDatum<{ value: number }>>()
      .innerRadius(radius - chartThickness)
      .outerRadius(radius);

    const data = [{ value: years * 10 }, { value: 100 - years * 10 }];

    const arcs = pie(data);

    const colorInterpolator = d3.interpolate('#443114', '#d0983d');
    const color = colorInterpolator(Math.min(years / 10, 1));

    const path = svg.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (_d, i) => i ? '#0a0a0a' : color)
      .attr('d', arc);

    path.transition()
      .duration(750)
      .attrTween('d', function(d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t: number) {
          return arc(interpolate(t)) || '';
        };
      });

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('dy', '0.35em')
      .attr('font-size', '12px')
      .attr('fill', '#ffffff')
      .text(`${years}`);

    // Function to wrap text
    const wrap: (selection: d3.Selection<SVGTextElement, unknown, null, undefined>, args_0: number) => void = (text, width) => {
      text.each(function() {
        let text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line: string[] = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")) || 0,
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", `${dy}em`);

        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node()?.getComputedTextLength() || 0 > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", `${(++lineNumber * lineHeight + dy)}em`).text(word);
          }
        }
      });
    }

    // Add label text with wrapping
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('y', height / 2 + 4)
      .attr('font-size', '13px')
      .attr('fill', '#ffffff')
      .text(labelText)
      .call(wrap, width);

    return () => {
      if (chartRef.current) {
        d3.select(chartRef.current).selectAll('*').remove();
      }
    };
  }, [years, labelText]);

  return <div ref={chartRef} />;
};

export default DonutChart;
