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
    }

    return {
        menu,
        setMenu
    };
}