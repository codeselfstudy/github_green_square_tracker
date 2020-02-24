<script>
    import ActivityTable from "./components/ActivityTable.svelte";
    // export let name;
</script>

<style>

</style>

<main>
    <h1 class="title is-1">Github Green Square Tracker</h1>
    <table>
        <tr>
            <th>Date</th>
            <th>Contributions</th>
        </tr>
        <tr>
            <td>2020-02-24</td>
            <td>100</td>
        </tr>
    </table>
    <ActivityTable />
</main>
