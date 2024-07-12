import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import './skeletonCard.css'

const SkeletonCard = () => {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
            <section className="skeleton-card">
                <Skeleton height={400} />
            </section>
        </SkeletonTheme>
    );
};

export default SkeletonCard;