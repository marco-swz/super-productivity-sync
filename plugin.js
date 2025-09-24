// Register multiple UI elements
PluginAPI.registerHeaderButton({
  label: 'My Button',
  icon: 'star',
  onClick: async () => {
    const tasks = await PluginAPI.getTasks();
    console.log(`You have ${tasks.length} tasks`);
  },
});

PluginAPI.registerHook(PluginAPI.Hooks.TASK_COMPLETE, (taskId) => {
  console.log(`Task ${taskId} completed!`);
});
