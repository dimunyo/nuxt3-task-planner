export const useTaskStore = defineStore("task", {
  state: () => ({
    task: null as TaskInfo | null,
    user: [] as UserInfo[],
  }),
  actions: {
    async fetchTasks() {
      try {
        const config = useRuntimeConfig();
        const response = await $fetch(`${config.public.appUrl}/tasks`, {
          method: "GET",
        });
        this.task = response;
      } catch (error) {
        console.error("Error on Fetching Tasks: ", error);
      }
    },
    async createNewTask(data: string) {
      try {
        const config = useRuntimeConfig();
        const response = await $fetch(`${config.public.appUrl}/tasks`, {
          method: "POST",
          body: {
            title: data,
          },
        });
        if (this.task) {
          this.task.push(response);
        }
      } catch (error) {
        console.error("Error on Creating New Task: ", error);
      }
    },
    async updateExistingTask(id: string, data: TaskInfo) {
      try {
        const config = useRuntimeConfig();
        await $fetch(`${config.public.appUrl}/tasks/${id}`, {
          method: "PUT",
          body: {
            ...data,
          },
        });
        this.task.map((x) => {
          x.id === data.id ? { ...x, ...data } : x;
        });
      } catch (error) {
        console.error("Error on Updating Exiting Task: ", error);
      }
    },
    async deleteTask(id: string) {
      try {
        const config = useRuntimeConfig();
        const response = await $fetch(`${config.public.appUrl}/tasks/${id}`, {
          method: "DELETE",
        });
        this.task = this.task.filter((x) => x.id !== id);
      } catch (error) {
        console.error("Error on Deleting Task: ", error);
      }
    },
    async searchTask(query: string) {
      const config = useRuntimeConfig();
      const response = await $fetch(`${config.public.appUrl}/tasks`, {
        method: "GET",
        params: {
          search: query,
          sortBy: "title",
          order: "desc",
        },
      });
      this.task = response;
    },
    async fetchUsers() {
      try {
        const config = useRuntimeConfig();
        const response = await $fetch(`${config.public.appUrl}/users`, {
          method: "GET",
        });
        this.user = response;
      } catch (error) {
        console.error("Error on Fetching Users: ", error);
      }
    },
  },
  getters: {
    importantList() {
      if (this.task) {
        return this.task.filter((x) => x.is_important == true);
      }
    },
    doneList() {
      if (this.task) {
        return this.task.filter((x) => x.is_done == true);
      }
    },
  },
});

interface TaskInfo {
  title: string;
  created_at: Date;
  assignee: UserInfo;
  is_done: boolean;
  is_important: boolean;
  sort: number;
  id: string;
}

interface UserInfo {
  name: string;
  avatar: string;
  id: string;
}
