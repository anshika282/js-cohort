document.addEventListener("DOMContentLoaded", function () {
    const moodOptions = document.querySelectorAll(".mood-option");
    let selectedMood = null;

    moodOptions.forEach(option => {
        option.addEventListener("click", function () {
            moodOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedMood = this.dataset.mood;
        });
    });


    document.getElementById("saveMood").addEventListener("click", function () {
        if (!selectedMood) {
            alert("Please select a mood first.");
            return;
        }

        const today = new Date().toISOString().split("T")[0];
        let moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];

        const existingMoodIndex = moodLogs.findIndex(log => log.date === today);
        if (existingMoodIndex !== -1) {
            moodLogs[existingMoodIndex].mood = selectedMood;
        } else {
            moodLogs.push({ date: today, mood: selectedMood });
        }

        localStorage.setItem("moodLogs", JSON.stringify(moodLogs));
        alert("Mood saved!");
        displayMoods();
    });

    function displayMoods(filter = "daily") {
        const moodTimeline = document.getElementById("moodTimeline");
        moodTimeline.innerHTML = "";
        let moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];


        let uniqueLogs = {};
        moodLogs.forEach(log => {
            uniqueLogs[log.date] = log.mood;
        });

        let filteredLogs = Object.entries(uniqueLogs).filter(([date, mood]) => {
            const logDate = new Date(date);
            const now = new Date();

            if (filter === "daily") {
                return logDate.toDateString() === now.toDateString();
            } else if (filter === "weekly") {
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
                return logDate >= oneWeekAgo;
            } else if (filter === "monthly") {
                return logDate.getMonth() === now.getMonth() && logDate.getFullYear() === now.getFullYear();
            }
        });


        filteredLogs.forEach(([date, mood]) => {
            let listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `${date}: ${mood}`;
            moodTimeline.appendChild(listItem);
        });
    }
    document.getElementById("viewFilter").addEventListener("change", function () {
        displayMoods(this.value);
    });

    displayMoods();
});
