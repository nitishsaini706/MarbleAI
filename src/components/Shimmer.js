import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for shimmer effect
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Shimmer effect styles
const ShimmerBlock = styled.div`
  animation: ${shimmer} 2s linear infinite;
  background: #d9d9d9b5;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 2000px 100%;
  border-radius: 8px;
`;

const ShimmerHeader = styled(ShimmerBlock)`
  height: 20px;
  margin-bottom: 8px;
  width: 30%;
`;


const ShimmerChart = styled(ShimmerBlock)`
  height: 300px;
`;

// Wrapper for the shimmer layout
const ShimmerLayout = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;
const ShimmerInnerBlock = styled(ShimmerBlock)`
  height: 10px;
  width: 60%;
  margin-bottom: 8px;
  background-color: #848484;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ShimmerInnerBlock2 = styled(ShimmerBlock)`
  height: 20px;
  width: 90%;
  margin-bottom: 8px;
  background-color: #848484;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ShimmerStat = styled.div`
  background-color: #d9d9d9b5;
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;
  width: calc(25% - 10px);

  // Applying the shimmer effect to the inner blocks
  ${ShimmerInnerBlock} {
    animation: ${shimmer} 3s linear infinite;
  }
  ${ShimmerInnerBlock2} {
    animation: ${shimmer} 3s linear infinite;
  }

  &:last-child {
    margin-right: 0;
  }
`;
export default function ShimmerEffect() {
  return (
    <ShimmerLayout>
      
      {/* Shimmer for the stats */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {[...new Array(4)].map((_, index) => (
          <ShimmerStat key={index}>
            <ShimmerInnerBlock />
            <ShimmerInnerBlock2 />
          </ShimmerStat>
        ))}
      </div>
      {/* Shimmer for the chart */}
      <ShimmerChart />
    </ShimmerLayout>
  );
}
