import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Robot() {

    const spline = useRef();

    function onLoad(splineApp) {
    spline.current = splineApp;
    }

    return (
        <Spline 
        scene="https://prod.spline.design/7z-zn98AV3MiQD7t/scene.splinecode" 
        onLoad={onLoad}
    />
  )
}
