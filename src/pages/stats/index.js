import React, { useState, useCallback, useRef } from "react";
import Header from "../../../components/header";
import Card from "../../../components/card";
import doRequest from "../../hooks/doRequest";

import "./style.css";

const StatsPage = () => {
    const [page, setPage] = useState(1);
    const { loading, stats, hasMore, mostDownloaded } = doRequest(page);

    const observer = useRef(null);

    const lastBookElementRef = useCallback(
        async (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPageNumber) => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <>
            <Header siteTitle={`Mizu`} />
            <section className="stats">
                <Card
                    customStyle={{
                        margin: "30px 0",
                        padding: "30px 20px",
                        backgroundColor: "#fff",
                    }}
                >
                    <h1 className="title">
                        Mizu project - artifacts download stats
                    </h1>
                    <h2>Download summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Filename</th>
                                <th>Downloads</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mostDownloaded.map((file, index) => {
                                return (
                                    <tr key={index}>
                                        <td data-label="Filename">
                                            {file.name}
                                        </td>
                                        <td data-label="Downloads">
                                            {file.download_count}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </section>
            <section className="detailedStats">
                <Card
                    customStyle={{
                        margin: "30px 0",
                        padding: "30px 20px",
                        backgroundColor: "#fff",
                    }}
                >
                    <h2>Detailed information per release</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Release</th>
                                <th>Filename</th>
                                <th>Downloads</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map((file, index) => {
                                if (stats.length === index + 1) {
                                    return (
                                        <tr
                                            key={index}
                                            ref={lastBookElementRef}
                                        >
                                            <td data-label="Release">
                                                {file.target_commitish}
                                            </td>
                                            <td data-label="Filename">
                                                {file.name}
                                            </td>
                                            <td data-label="Downloads">
                                                {file.download_count}
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={index}>
                                            <td data-label="Release">
                                                {file.target_commitish}
                                            </td>
                                            <td data-label="Filename">
                                                {file.name}
                                            </td>
                                            <td data-label="Downloads">
                                                {file.download_count}
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                    <div className="loading">
                        <h2>{loading && "Loading..."}</h2>
                    </div>
                </Card>
            </section>
        </>
    );
};

export default StatsPage;
