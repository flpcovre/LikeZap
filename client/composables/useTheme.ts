import { ref, onMounted } from "vue";

export const useTheme = () => {
  const theme = ref('dark');

  onMounted(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    theme.value = storedTheme;
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  });

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme.value);
    document.documentElement.classList.toggle("dark", theme.value === "dark");
  };

  return { theme, toggleTheme };
};
