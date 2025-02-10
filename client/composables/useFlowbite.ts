export function useFlowbite(callback: CallableFunction) {
    if (process.client) {
      import('flowbite').then((flowbite) => {
        callback(flowbite);
      });
    }
  }