import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import './skeletonCard.css'

const SkeletonCard = () => {
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
            <div className="skeleton-card">
                <Skeleton height={400} />
            </div>
        </SkeletonTheme>
    );
};

export default SkeletonCard;