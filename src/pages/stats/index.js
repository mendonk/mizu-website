import React from "react";
import { Bar } from "react-chartjs-2";
import Header from "../../../components/header";
import Card from "../../../components/card";
import doRequest from "../../hooks/doRequest";

import "./style.css";

const StatsPage = () => {
    const {
        loading,
        stats,
        mostDownloaded,
        dailyStats,
        totalDownloads,
        versionTXT,
        versionTXTDaily,
        totalDownloadsVersion,
        error,
    } = doRequest();

    const data = {
        labels: Array.from(dailyStats, (obj) => `${obj.date}`),
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

    const versionTXTChart = {
        labels: Array.from(versionTXTDaily, (obj) => `${obj.date}`),
        datasets: [
            {
                label: "# Off Downloads",
                data: Array.from(versionTXTDaily, (obj) => obj.download_count),
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

    return loading ? (
        <>
            <Header siteTitle={`Mizu - Stats`} />
            <section className="loading">
                <Card
                    customStyle={{
                        margin: "30px 0",
                        padding: "30px 20px",
                        backgroundColor: "#fff",
                        textAlign: "center",
                    }}
                >
                    <h1>{!error ? "Loading..." : error}</h1>
                </Card>
            </section>
        </>
    ) : (
        <>
            <Header siteTitle={`Mizu - Stats`} />

            <section className="stats">
                <Card
                    customStyle={{
                        margin: "30px 0",
                        padding: "30px 20px",
                        backgroundColor: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    responsiveWidth="responsiveColumns"
                >
                    <div className="downloadsSummary">
                        <h2>Total Downloads {totalDownloads}</h2>
                        <div>
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
                        </div>
                        <div className="detailedDownloadsStats">
                            <h2>Information per release</h2>

                            <div className="detailedDownloadsStatsTableWrapper">
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
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="totalDownloadsChartWrapper">
                        <h2>Daily downloads</h2>
                        <Bar data={data} options={options} />
                    </div>
                </Card>
            </section>
            <section className="version">
                <Card
                    customStyle={{
                        margin: "30px 0",
                        padding: "30px 20px",
                        backgroundColor: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    responsiveWidth="responsiveColumns"
                >
                    <div className="versionTXTtable">
                        <h2>
                            Version.txt Total Downloads {totalDownloadsVersion}
                        </h2>
                        <div className="versionTXTtableTableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Release</th>
                                        <th>Filename</th>
                                        <th>Downloads</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {versionTXT.map((file, index) => {
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
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="versionTXTChart">
                        <h2>Version.txt Daily Downloads</h2>
                        <Bar data={versionTXTChart} options={options} />
                    </div>
                </Card>
            </section>
        </>
    );
};

export default StatsPage;
