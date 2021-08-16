import { useEffect, useState, useCallback } from "react";
import { Octokit } from "@octokit/core";
const octokit = new Octokit();

export default function useBookSearch(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [stats, setStats] = useState([]);
    const [mostDownloaded, setMostDownloaded] = useState([]);
    const [dailyStats, setDailyStats] = useState([]);

    const formatDate = (date) => {
        const formatedDate = new Date(date);
        const month = `0${formatedDate.getUTCMonth() + 1}`.slice(-2);
        const day = `0${formatedDate.getUTCDate()}`.slice(-2);
        return `${formatedDate.getUTCFullYear()}-${month}-${day}`;
    };

    const processResult = useCallback((response, type) => {
        const statsProccessed = [];
        const paginatedCondition = type === "paginated" ? false : true;
        response.data.forEach((object) => {
            const additionalInfo = {
                target_commitish:
                    object.target_commitish + "/" + object.tag_name,
                formatedDate: formatDate(object.created_at),
            };
            for (let singleObj of object.assets) {
                if (
                    singleObj.name === "README.md" ||
                    singleObj.name === "version.txt" ||
                    (singleObj.download_count === 0 && paginatedCondition)
                )
                    continue;
                const newObj = { ...additionalInfo, ...singleObj };
                statsProccessed.push(newObj);
            }
        });
        return statsProccessed;
    }, []);

    const githubRequest = (_) => {
        setLoading(true);
        octokit
            .request("/repos/up9inc/mizu/releases", {
                page: pageNumber,
                per_page: 3,
            })
            .then((res) => {
                const statsProccessed = processResult(res, "paginated");
                setStats((prevStats) => {
                    return [...new Set([...prevStats, ...statsProccessed])];
                });
                setHasMore(res.data.length > 0);
                setLoading(false);
            });
    };

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

    const loopGrouping = (obj, propName) => {
        const response = [];
        for (const singleObj in obj) {
            let downloads = 0;
            obj[singleObj].forEach((dateStats) => {
                downloads += dateStats.download_count;
            });
            response.push({
                [propName]: singleObj,
                download_count: downloads,
            });
        }
        return response;
    };

    const topDownloaded = (_) => {
        octokit
            .request("/repos/up9inc/mizu/releases")
            .then((mostDownloaded) => {
                const statsProccessed = processResult(
                    mostDownloaded,
                    "topDownloads"
                );
                const groupedStats = groupBy(statsProccessed, "name");
                const groupByDate = groupBy(statsProccessed, "formatedDate");
                const statsObject = loopGrouping(groupedStats, "name");
                const dateStats = loopGrouping(groupByDate, "date");

                const sort = statsObject.sort(
                    (a, b) => b.download_count - a.download_count
                );
                const sortByDate = dateStats.sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                const topFive = sort.slice(0, 5);

                setMostDownloaded(topFive);
                setDailyStats(sortByDate);
            });
    };

    useEffect(githubRequest, [pageNumber, processResult]);
    useEffect(topDownloaded, [processResult]);

    return { loading, stats, hasMore, mostDownloaded, dailyStats };
}
