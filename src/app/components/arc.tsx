"use client";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DonutChartProps {
  completionPercentage: number;
  labelText: string;
  color?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ completionPercentage, labelText, color='#efaf48' }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 50;
    const height = 50;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height + 30)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Define the pie layout
    const pie = d3.pie()
      .sort(null)
      .value((d: { value: number }) => d.value);

    // Define the arc function
    const arc = d3.arc()
      .innerRadius(radius - 4)
      .outerRadius(radius);

    // Data
    const data: Array<{ value: number }> = [{ value: completionPercentage }, { value: 100 - completionPercentage }];

    // Generate the arcs
    const arcs = pie(data);

    // Create a group for each arc
    const path = svg.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (_d: d3.PieArcDatum<{ value: number }>, i: number) => i ? '#000' : color)
      .attr('d', arc);

    // Apply tween for animation
    path.transition()
      .duration(750)
      .attrTween('d', function(d: d3.PieArcDatum<{ value: number }>) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t: number) {
          return arc(interpolate(t));
        };
      });

    // Add text in the center
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('dy', '0.35em')
      .text(`${completionPercentage}%`);

    // Add label text under the chart with white color
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('y', height / 2 + 20)
      .attr('font-size', '10px')
      .attr('fill', '#ffffff') // Here we set the text color to white
      .text(labelText);

    // Cleanup function to remove SVG when component unmounts
    return () => {
      if (chartRef.current) {
        d3.select(chartRef.current).selectAll('*').remove();
      }
    };
  }, [completionPercentage, labelText]);

  return <div ref={chartRef} />;
};

export default DonutChart;
