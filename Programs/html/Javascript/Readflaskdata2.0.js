document.addEventListener("DOMContentLoaded", function () {
    const globalTab = document.getElementById("global-tab");
    const canadaTab = document.getElementById("canada-tab");
    const egyptTab = document.getElementById("egypt-tab");
    const movieTable = document.getElementById("movie-data");
    const nextButton = document.getElementById("next-button");
    const previousButton = document.getElementById("previous-button");

    let currentPage = 0; // Current page for pagination
    const pageSize = 10; // Number of rows per page

    globalTab.addEventListener("click", () => loadMovieData("global1"));
    canadaTab.addEventListener("click", () => loadMovieData("canada1"));
    egyptTab.addEventListener("click", () => loadMovieData("egypt1"));
    nextButton.addEventListener("click", () => nextPage());
    previousButton.addEventListener("click", () => previousPage());

    function loadMovieData(apiEndpoint) {
        // Make a request to your API endpoint using fetch or jQuery.ajax
        fetch(`http://127.0.0.1:5000/api/v1.0/global1`)
            .then((response) => response.json())
            .then((data) => {
                // Clear previous data
                movieTable.innerHTML = "";

                // Calculate the starting and ending index for the current page
                const startIndex = currentPage * pageSize;
                const endIndex = startIndex + pageSize;

                // Populate the table with the retrieved data for the current page
                for (let i = startIndex; i < endIndex; i++) {
                    if (data[i]) {
                        const movie = data[i];
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
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    function nextPage() {
        currentPage++;
        // Load data for the current tab with pagination
        const currentTab = document.querySelector(".tabs button.active");
        loadMovieData(currentTab.id);
    }

    function previousPage() {
        currentPage--;
        // Load data for the current tab with pagination
        const currentTab = document.querySelector(".tabs button.active");
        loadMovieData(currentTab.id);
    }

    // Load data for the default tab (e.g., "global")
    loadMovieData("global1");
});