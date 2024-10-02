const gettingAllTeams = async () => {
    try {
        const response = await fetch('/teams');
        // console.log("response");
        // console.log(response)
        // console.log("Fetching all teams");
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching teams:", error);
        return null;  // Handle error gracefully
    }
};

export default gettingAllTeams;