export const useMenu = () => {
    const menu = useState('menu', () => 'Conversations');

    const setMenu = (newMenu: string) => {
        const menus = [
            'Conversations',
            'Notifications',
            'UserProfile',
            'Settings'
        ];

        if (menus.includes(newMenu)) {
            menu.value = newMenu;
        }
    };

    const getButtonClass = (targetMenu: string) => {
        return menu.value === targetMenu ? "rounded-full bg-gray-700" : "";
    };
      
      const getIconClass = (targetMenu: string) => {
        return menu.value === targetMenu ? "text-indigo-400" : "dark:text-gray-400";
    };

    return {
        menu,
        setMenu,
        getButtonClass,
        getIconClass
    };
}