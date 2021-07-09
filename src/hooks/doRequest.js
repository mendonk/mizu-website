import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
const octokit = new Octokit();

export default function useBookSearch(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [stats, setStats] = useState([]);
    const [mostDownloaded, setMostDownloaded] = useState([]);

    function processResult(response) {
        const statsProccessed = [];
        response.data.forEach((stat) => {
            const additionalInfo = {
                target_commitish: stat.target_commitish + "/" + stat.tag_name,
            };
            stat.assets.forEach((asseetItem) => {
                const newObj = { ...additionalInfo, ...asseetItem };
                statsProccessed.push(newObj);
            });
        });
        return statsProccessed;
    }

    const githubRequest = () => {
        setLoading(true);
        octokit
            .request("/repos/up9inc/mizu/releases", {
                page: pageNumber,
                per_page: 3,
            })
            .then((res) => {
                const statsProccessed = processResult(res);
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

    const topDownloaded = async (_) => {
        const mostDownloaded = await octokit.request(
            "/repos/up9inc/mizu/releases"
        );
        const statsProccessed = processResult(mostDownloaded);
        const groupedStats = groupBy(statsProccessed, "name");
        const statsObject = [];
        for (const property in groupedStats) {
            if (property === "README.md") continue;
            let downloads = 0;
            groupedStats[property].forEach((stat) => {
                downloads += stat.download_count;
            });
            statsObject.push({
                name: property,
                download_count: downloads,
            });
        }
        const sort = statsObject.sort(
            (a, b) => b.download_count - a.download_count
        );
        const topFive = sort.slice(0, 5);
        setMostDownloaded(topFive);
    };

    useEffect(topDownloaded, []);
    useEffect(githubRequest, [pageNumber]);

    return { loading, stats, hasMore, mostDownloaded };
}
