"use client";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DonutChartProps {
  completionPercentage: number;
  labelText: string;
  color?: string;
  chartThickness?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({
  completionPercentage,
  labelText,
  color = '#efaf48',
  chartThickness = 5,
}) => {
  if (!completionPercentage || completionPercentage < 0 || completionPercentage > 100) {
    throw new Error('Invalid completion percentage');
  }

  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Increased chart size for better visibility
    const width = 50;
    const height = 50;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height + 30) // Extra space for label
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Define the pie layout
    const pie = d3.pie<{ value: number }>()
      .sort(null)
      .value(d => d.value);

    // Adjusting arc dimensions for better visibility in smaller space
    const arc = d3.arc<d3.PieArcDatum<{ value: number }>>()
      .innerRadius(radius - chartThickness) // Thinner donut for small size
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
      .attr('fill', (_d, i) => i ? '#0a0a0a' : color) // Changed background color to a lighter gray for contrast
      .attr('d', arc);

    // Apply tween for animation
    path.transition()
      .duration(750)
      .attrTween('d', function(d: d3.PieArcDatum<{ value: number }>) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t: number) {
          return arc(interpolate(t)) || '';
        };
      });

    // Add percentage text in the center
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('dy', '0.35em')
      .attr('font-size', '8px') // Smaller font for the smaller chart
      .text(`${completionPercentage}%`);

    // Add label text under the chart with white color
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('y', height / 2 + 20)
      .attr('font-size', '12px') // Smaller font for the smaller chart
      .attr('fill', '#ffffff')
      .text(labelText);

    // Cleanup function to remove SVG when component unmounts
    return () => {
      if (chartRef.current) {
        d3.select(chartRef.current).selectAll('*').remove();
      }
    };
  }, [completionPercentage, labelText, color]);

  return <div ref={chartRef} />;
};

export default DonutChart;
