import { ref, onMounted } from "vue";

export const useTheme = () => {
  const theme = ref("dark");
  const cookieTheme = useCookie("theme");

  onMounted(() => {
    const storedTheme = cookieTheme.value || "dark";
    theme.value = storedTheme;
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  });

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    cookieTheme.value = theme.value;
    document.documentElement.classList.toggle("dark", theme.value === "dark");
  };

  return { theme, toggleTheme };
};
