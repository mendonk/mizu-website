import { useEffect, useState, useCallback } from "react";
import { Octokit } from "@octokit/core";
const octokit = new Octokit();

export default function useBookSearch() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [stats, setStats] = useState([]);
    const [mostDownloaded, setMostDownloaded] = useState([]);
    const [dailyStats, setDailyStats] = useState([]);
    const [totalDownloads, setTotalDownloads] = useState(0);
    const [totalDownloadsVersion, setTotalDownloadsVersion] = useState(0);
    const [versionTXT, setVersionTXT] = useState([]);
    const [versionTXTDaily, setVersionTXTDaily] = useState([]);

    const formatDate = (date) => {
        const formatedDate = new Date(date);
        const month = `0${formatedDate.getUTCMonth() + 1}`.slice(-2);
        const day = `0${formatedDate.getUTCDate()}`.slice(-2);
        return `${formatedDate.getUTCFullYear()}-${month}-${day}`;
    };

    const processResult = useCallback((response) => {
        const statsProccessed = [];
        response.forEach((object) => {
            const additionalInfo = {
                target_commitish:
                    object.target_commitish + "/" + object.tag_name,
                formatedDate: formatDate(object.created_at),
            };
            for (let singleObj of object.assets) {
                const newObj = { ...additionalInfo, ...singleObj };
                statsProccessed.push(newObj);
            }
        });
        return statsProccessed;
    }, []);

    const githubRequestMostDownloaded = useCallback(
        (pgnumber) => {
            return new Promise((resolve, reject) => {
                octokit
                    .request("/repos/up9inc/mizu/releases", {
                        page: pgnumber,
                        per_page: 100,
                    })
                    .then((res) => {
                        const statsProccessed = processResult(
                            res.data,
                            "paginated"
                        );
                        resolve(statsProccessed);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        [processResult]
    );

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    const loopGrouping = (obj, propName, filter = "") => {
        const response = [];
        for (const singleObj in obj) {
            let downloads = 0;
            for (let z = 0; z < obj[singleObj].length; z++) {
                if (obj[singleObj][z].name === filter) continue;
                downloads += obj[singleObj][z].download_count;
            }
            response.push({
                [propName]: singleObj,
                download_count: downloads,
            });
        }
        return response;
    };

    const topDownloaded = useCallback(async () => {
        try {
            setLoading(true);
            let res = [];
            let page = 1;
            let totalDownloads = 0;
            let totalDownloadsVersion = 0;

            while (true) {
                const request = await githubRequestMostDownloaded(page);
                page++;
                res = [...res, ...request];
                if (!request.length) break;
            }
            const groupByDate = groupBy(res, "formatedDate");
            const dateStats = loopGrouping(groupByDate, "date", "version.txt");

            const groupedStatsByName = groupBy(res, "name");

            const mizuStats = loopGrouping(
                groupedStatsByName,
                "name",
                "version.txt"
            );

            const getVersionTXT = groupedStatsByName["version.txt"];

            const groupVersionTXT = groupBy(getVersionTXT, "formatedDate");
            const loopinGroupedVersionTXT = loopGrouping(
                groupVersionTXT,
                "date"
            );

            const sortedtStats = mizuStats.sort(
                (a, b) => b.download_count - a.download_count
            );
            const sortByDate = dateStats.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
            const groupVersionTXTSort = loopinGroupedVersionTXT.sort(
                (a, b) => new Date(b.formatedDate) - new Date(a.formatedDate)
            );

            sortedtStats.forEach((obj) => {
                totalDownloads += obj.download_count;
            });
            getVersionTXT.forEach((obj) => {
                totalDownloadsVersion += obj.download_count;
            });
            const lastTenDays = sortByDate.slice(0, 15);

            setMostDownloaded(sortedtStats);
            setDailyStats(lastTenDays);
            setTotalDownloads(totalDownloads);
            setTotalDownloadsVersion(totalDownloadsVersion);
            setVersionTXT(getVersionTXT);
            setVersionTXTDaily(groupVersionTXTSort.slice(0, 15));
            setStats(res);
            setLoading(false);
        } catch (e) {
            setError("Something went wrong, please try again");
        }
    }, [githubRequestMostDownloaded]);

    useEffect(() => {
        async function fetchData() {
            await topDownloaded();
        }
        fetchData();
    }, [topDownloaded]);

    return {
        loading,
        stats,
        mostDownloaded,
        dailyStats,
        versionTXT,
        versionTXTDaily,
        totalDownloads,
        totalDownloadsVersion,
        error,
    };
}
