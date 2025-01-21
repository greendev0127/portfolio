import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const ReactLottie = dynamic(
  () => import('lottie-react'),
  { ssr: false }  // This will disable server-side rendering.
);

export default function Lottie({ animationDataFile }) {
  return (
    <ReactLottie animationData={animationDataFile} loop={true}  />
  );
}

Lottie.propTypes = {
  animationDataFile: PropTypes.object,
};