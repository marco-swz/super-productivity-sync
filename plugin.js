/**
 * @typedef {import('@super-productivity/plugin-api').PluginAPI} PluginAPI
 * @typedef {import('@super-productivity/plugin-api').Task} Task
 */

/** @type {PluginAPI} */
const Api = PluginAPI;

Api.registerHeaderButton({
    label: 'Synchronize',
    icon: 'star',
    onClick: async () => {
        await sync();
    },
});

Api.registerHook(Api.Hooks.TASK_COMPLETE, (taskId) => {
    console.log(`Task ${taskId} completed!`);
});

async function sync() {
    const endpoint = await Api.loadSyncedData('endpoint');

    if (endpoint == null) {
        Api.showSnack({
            msg: 'No endpoint defined!',
            type: 'ERROR',
        });
        return;
    }

    const tasks = await Api.getTasks();
    const resp = await fetch(endpoint, { method: 'post', body: JSON.stringify(tasks)});

    if (!resp.ok) {
        Api.showSnack({
            msg: 'Sync failed: Response not ok!',
            type: 'ERROR',
        });
        return;
    }
}
