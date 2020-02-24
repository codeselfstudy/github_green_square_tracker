<script>
    import ActivityTable from "./components/ActivityTable.svelte";

    let username = "";
    function createUrl(username) {
        return `https://api.github.com/users/${username}/events`;
    }

    function fetchActivity() {
        let url = createUrl("j127");
        fetch(url)
            .then(res => res.json())
            .then(json => console.table(json));
    }
</script>

<style>

</style>

<main>
    <h1 class="title is-1">Github Green Square Tracker</h1>
    <form>
        <label for="username">Github Username</label>
        <input type="text" name="username" value={username}>
        <input type="submit" on:click="fetchActivity" name="submit" value="Fetch Activity">
    </form>
    <ActivityTable />
</main>
