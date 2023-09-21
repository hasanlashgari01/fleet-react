import { useEffect, useRef, useState } from "react";

const InputRange = () => {
    const [thumbFirst, setThumbFirst] = useState(0);
    const [thumbSecond, setThumbSecond] = useState(24);

    const sliderTrackRef = useRef();
    const thumbFirstRef = useRef();
    const thumbSecondRef = useRef();

    let min = 0;
    let max = 24;
    let minGap = 0;

    useEffect(() => {
        let percent1 = (thumbFirst / thumbFirstRef.current.max) * 100;
        let percent2 = (thumbSecond / thumbFirstRef.current.max) * 100;
        sliderTrackRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }, [thumbFirst, thumbSecond]);

    const thumbOne = () => {
        setThumbFirst(thumbFirstRef.current.value);
        if (+thumbSecond - +thumbFirst <= minGap) {
            setThumbFirst(+thumbSecond - minGap);
        }
    };

    const thumbTwo = () => {
        setThumbSecond(thumbSecondRef.current.value);
        if (+thumbSecond - +thumbFirst < minGap) {
            setThumbSecond(+thumbFirst + minGap);
        }
    };

    const timeHandle = (item) => (item == 0 ? "00" : item < 9 ? `0${item}` : item);

    return (
        <div className="wrapper">
            <div>
                <div className="slider-track" ref={sliderTrackRef}></div>
                <input type="range" min={min} max={max} value={thumbFirst} ref={thumbFirstRef} onChange={thumbOne} />
                <input type="range" min={min} max={max} value={thumbSecond} ref={thumbSecondRef} onChange={thumbTwo} />
            </div>
            <div className="flex justify-between items-center mt-16">
                <span id="range1">{timeHandle(thumbFirst)}:00</span>
                <span id="range2">{timeHandle(thumbSecond)}:00</span>
            </div>
        </div>
    );
};

export default InputRange;
