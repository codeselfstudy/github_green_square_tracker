<script>
    import ActivityTable from "./components/ActivityTable.svelte";

    export let username = "";

    function createUrl(uname) {
        return `https://api.github.com/users/${uname}/events`;
    }

    function fetchActivity(e) {
        e.preventDefault();
        let url = createUrl(username);
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
        <input type="text" name="username" bind:value={username}>
        <button type="submit" on:click={fetchActivity}>Fetch Activity</button>
    </form>
    <ActivityTable />
</main>
