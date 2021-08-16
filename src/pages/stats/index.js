import React, { useState, useCallback, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Header from "../../../components/header";
import Card from "../../../components/card";
import doRequest from "../../hooks/doRequest";

import "./style.css";

const StatsPage = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const [page, setPage] = useState(1);
    const { loading, stats, hasMore, mostDownloaded, dailyStats } =
        doRequest(page);

    const observer = useRef(null);

    const data = {
        labels: Array.from(
            dailyStats,
            (obj) => `${obj.date} - ${days[new Date(obj.date).getDay()]}`
        ),
        datasets: [
            {
                label: "# Off Downloads",
                data: Array.from(dailyStats, (obj) => obj.download_count),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

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
            <Header siteTitle={`Mizu - Stats`} />
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
            <section className="chartPlot">
                <Card
                    customStyle={{
                        padding: "30px 20px",
                        backgroundColor: "#fff",
                    }}
                >
                    <h2>Daily downloads</h2>
                    <Bar data={data} options={options} />
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
