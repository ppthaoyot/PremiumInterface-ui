import React from "react";
import { useWindowSize } from "react-use";

function Home() {
    const { width, height } = useWindowSize();
    return (
        <div>
            <div>ความกว้างหน้าจอ : {width}</div>
            <div>ความสูงหน้าจอ : {height}</div>
        </div>
    );
}

export default Home;
