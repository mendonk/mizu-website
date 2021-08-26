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

    const formatDate = (date) => {
        const formatedDate = new Date(date);
        const month = `0${formatedDate.getUTCMonth() + 1}`.slice(-2);
        const day = `0${formatedDate.getUTCDate()}`.slice(-2);
        return `${formatedDate.getUTCFullYear()}-${month}-${day}`;
    };

    const processResult = useCallback((response) => {
        const statsProccessed = [];
        // const paginatedCondition = type === "paginated" ? false : true;
        response.forEach((object) => {
            const additionalInfo = {
                target_commitish:
                    object.target_commitish + "/" + object.tag_name,
                formatedDate: formatDate(object.created_at),
            };
            for (let singleObj of object.assets) {
                // if (
                //     singleObj.name === "README.md" ||
                //     singleObj.name === "version.txt" ||
                //     (singleObj.download_count === 0 && paginatedCondition)
                // )
                //     continue;
                const newObj = { ...additionalInfo, ...singleObj };
                statsProccessed.push(newObj);
            }
        });
        return statsProccessed;
    }, []);

    // const githubRequest = (_) => {
    //     setLoading(true);
    //     octokit
    //         .request("/repos/up9inc/mizu/releases", {
    //             page: pageNumber,
    //             per_page: 50,
    //         })
    //         .then((res) => {
    //             const statsProccessed = processResult(res.data, "paginated");
    //             setStats((prevStats) => {
    //                 return [...new Set([...prevStats, ...statsProccessed])];
    //             });
    //             setHasMore(res.data.length > 0);
    //             setLoading(false);
    //         });
    // };

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

    const topDownloaded = useCallback(async () => {
        try {
            setLoading(true);
            let res = [];
            let page = 1;
            let totalDownloads = 0;

            while (true) {
                const request = await githubRequestMostDownloaded(page);
                page++;
                res = [...res, ...request];
                if (!request.length) break;
            }
            const groupedStats = groupBy(res, "name");
            const mizuStats = loopGrouping(groupedStats, "name");

            const groupByDate = groupBy(res, "formatedDate");
            const dateStats = loopGrouping(groupByDate, "date");

            const sortedtStats = mizuStats.sort(
                (a, b) => b.download_count - a.download_count
            );
            const sortByDate = dateStats.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
            sortedtStats.forEach((obj) => {
                totalDownloads += obj.download_count;
            });
            const topFive = sortByDate.slice(0, 10);

            setMostDownloaded(sortedtStats);
            setDailyStats(topFive);
            setTotalDownloads(totalDownloads);
            setStats(res);
            setLoading(false);
        } catch (e) {
            setError("Something went wrong, please try again");
        }
        // console.log("res", res);
        // res.forEach((item, i) => {
        //     console.log(i);
        // });
        // }

        // octokit
        //     .request("/repos/up9inc/mizu/releases")
        //     .then((mostDownloaded) => {
        //         const statsProccessed = processResult(
        //             mostDownloaded,
        //             "topDownloads"
        //         );
        // const groupedStats = groupBy(statsProccessed, "name");
        // const groupByDate = groupBy(statsProccessed, "formatedDate");
        // const statsObject = loopGrouping(groupedStats, "name");
        // const dateStats = loopGrouping(groupByDate, "date");
        // const sort = statsObject.sort(
        //     (a, b) => b.download_count - a.download_count
        // );
        // const sortByDate = dateStats.sort(
        //     (a, b) => new Date(b.date) - new Date(a.date)
        // );
        // const topFive = sort.slice(0, 5);
        // setMostDownloaded(topFive);
        // setDailyStats(sortByDate);
        // });
    }, [githubRequestMostDownloaded]);

    // useEffect(githubRequest, [pageNumber, processResult]);
    useEffect(() => {
        async function fetchData() {
            await topDownloaded();
        }
        fetchData();
    }, [topDownloaded]);

    return {
        loading,
        stats,
        // hasMore,
        mostDownloaded,
        dailyStats,
        totalDownloads,
        error,
    };
}
