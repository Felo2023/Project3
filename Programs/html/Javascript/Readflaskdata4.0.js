document.addEventListener("DOMContentLoaded", function () {
    const globalTab = document.getElementById("global-tab");
    const canadaTab = document.getElementById("canada-tab");
    const egyptTab = document.getElementById("egypt-tab");
    const ukTab = document.getElementById("uk-tab"); // New tab
    const australiaTab = document.getElementById("australia-tab"); // New tab
    const movieTable = document.getElementById("movie-data");
    const nextButton = document.getElementById("next-button");
    const previousButton = document.getElementById("previous-button");
    const barChartDiv = document.getElementById("bar-chart");

    let currentPage = 0; // Current page for pagination
    const pageSize = 10; // Number of rows per page
    let currentTabId = "global1"; // Initialize with the default tab

    globalTab.addEventListener("click", () => loadMovieData("global1"));
    canadaTab.addEventListener("click", () => loadMovieData("canada"));
    egyptTab.addEventListener("click", () => loadMovieData("egypt"));
    ukTab.addEventListener("click", () => loadMovieData("united_kingdom")); // New tab
    australiaTab.addEventListener("click", () => loadMovieData("australia")); // New tab
    nextButton.addEventListener("click", () => nextPage());
    previousButton.addEventListener("click", () => previousPage());

    function loadMovieData(apiEndpoint) {
        currentTabId = apiEndpoint; // Update the current tab
        // Make a request to your API endpoint using fetch or jQuery.ajax
        fetch(`http://127.0.0.1:5000/api/v1.0/${apiEndpoint}`)
            .then((response) => response.json())
            .then((data) => {
                // Clear previous data
                movieTable.innerHTML = "";

                // Calculate the starting and ending index for the current page
                const startIndex = currentPage * pageSize;
                const endIndex = startIndex + pageSize;

                // Get data for the current page
                const currentPageData = data.slice(startIndex, endIndex);

                // Populate the table with the retrieved data for the current page
                for (let i = 0; i < currentPageData.length; i++) {
                    const movie = currentPageData[i];
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${movie.No}</td>
                        <td>${movie.movie}</td>
                        <td>${movie.week_at_Top10}</td>
                        <td>${movie.hours_seen}</td>
                        <td>${movie.duration}</td>
                        <td>${movie.views}</td>
                    `;
                    movieTable.appendChild(row);
                }

                // Update the bar chart with the current page data
                updateBarChart(currentPageData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    function nextPage() {
        currentPage++;
        // Load data for the current tab with pagination
        loadMovieData(currentTabId);
    }

    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
            // Load data for the current tab with pagination
            loadMovieData(currentTabId);
        }
    }

    function updateBarChart(data) {
        const weeksAtTop10 = data.map((movie) => movie.week_at_Top10);
        const movieNames = data.map((movie) => movie.movie);

        const chartData = [{
            x: movieNames,
            y: weeksAtTop10,
            type: 'bar',
        }];

        const layout = {
            title: 'Weeks at Top 10',
            xaxis: { title: 'Movie' },
            yaxis: { title: 'Weeks' },
        };

        // Use Plotly.react to update the chart
        Plotly.react(barChartDiv, chartData, layout);
    }

    // Load data for the default tab (e.g., "global")
    loadMovieData("global1");
});
