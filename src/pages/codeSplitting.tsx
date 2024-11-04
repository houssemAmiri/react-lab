import { Suspense, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import PostByButton from "../ui/codeSplitting/postByButton";
import Post from "../ui/codeSplitting/post";

export default function CodeSplittingPage() {
    const [show, setShow] = useState<(() => () => JSX.Element) | null>(null);
    const postRef = useRef(null);
    const [shouldRenderPost, setShouldRenderPost] = useState(false);

    const handleShow = () => {
        void import("../ui/codeSplitting/postByButton").then((module) => {
            setShow(() => module.default);
        });
    };

    const handleIntersect = (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
            setShouldRenderPost(true);
        }
    };

    useIntersectionObserver(postRef, handleIntersect);
    return (
        <div className="App">
            <h1>Lazy Loading</h1>
            <h2>Dynamic import</h2>
            <Suspense fallback={<div>Loading......</div>}>
                <Post />
            </Suspense>

            <h2>Lazy loadin on iteraction</h2>

            {show ? (
                <Suspense fallback={<div>Loading......</div>}>
                    <PostByButton />
                </Suspense>
            ) : (
                <button onClick={handleShow}> How the text </button>
            )}

            <h2>Lazy loadin on iteraction observer</h2>

            <div>
                <div style={{ height: "1000px" }}>Some Content here</div>
                <div ref={postRef}>
                    {shouldRenderPost ? (
                        <Suspense fallback={<div>Loading......</div>}>
                            <Post />
                        </Suspense>
                    ) : (
                        <div>Loading......</div>
                    )}
                </div>
            </div>
        </div>
    );
}
