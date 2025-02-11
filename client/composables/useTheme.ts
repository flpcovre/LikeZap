import { ref } from "vue";

export const useTheme = () => {
  const theme = ref("dark");
  const cookieTheme = useCookie('theme');

  if (process.client) {
    theme.value = cookieTheme.value || "dark";
    document.documentElement.classList.toggle("dark", theme.value === "dark");
  }

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    cookieTheme.value = theme.value;
    document.documentElement.classList.toggle("dark", theme.value === "dark");
  };

  return { theme, toggleTheme };
};
